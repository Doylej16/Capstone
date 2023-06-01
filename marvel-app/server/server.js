const express = require('express');
const collection = require('../mongo');
const bcrypt = require('bcrypt');
const { user } = require('../models');
const cors = require('cors');
const app = express();
const path = require('path');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { session, LocalStrategy, pgSession, passport, Pool } = require('./passportSetup'); // Include passport related modules here

require('dotenv').config({ path: path.join(__dirname, '../path/to/.env') });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

app.use(
  session({
    secret: 'hjkhfsdjkfhsjkdhfksjhfkjsdhfu324i3idfs',
    resave: false,
    saveUninitialized: false,
    store: new pgSession({
      pool: new Pool({
        connectionString: 'postgres://skxehfhc:Gobo77ZLoZws53LHTQSEG4ZufYN9-wpf@mahmud.db.elephantsql.com/skxehfhc', // Replace with your ElephantSQL connection string
        ssl: {
          rejectUnauthorized: false,
        },
      }),
      tableName: 'sessions',
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Existing signup route
app.get('/signup', cors(), (req, res) => {});

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(req.body.password, 10, async function (err, hash) {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      const data = {
        name: name,
        email: email,
        password: hash,
      };

      const newUser = await user.build(data);
      await newUser.save();
      res.json({ name: name });
    }
  });
});

// Existing login route
app.get('/login', cors(), (req, res) => {});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}), (req, res) => {
  console.log('User logged in:', req.user);
});

// New password recovery route
app.post('/recover-password', async (req, res) => {
  const { email } = req.body;

  try {
    // Generate a password reset token (you can use a library like `crypto` to generate a unique token)
    const resetToken = generateResetToken();

    // Save the reset token and its expiration date to the user's record in the database
    await saveResetToken(email, resetToken);

    // Compose the email message
    const emailMessage = `
      <p>Hello,</p>
      <p>We received a request to reset your password. Please click the link below to reset your password:</p>
      <a href="http://localhost:3000/reset-password/${resetToken}">Reset Password</a>
      <p>If you didn't request this, you can ignore this email.</p>
    `;

    // Send the password reset email
    await sendEmail(email, 'Password Reset', emailMessage);

    res.json({ message: 'Password recovery email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Helper function to generate a random password reset token
function generateResetToken() {
  return crypto.randomBytes(20).toString('hex');
}

// Helper function to save the reset token and its expiration date to the user's record in the database
async function saveResetToken(email, resetToken) {
  try {
    const user = await User.findOneAndUpdate(
      { email },
      {
        resetToken,
        resetTokenExpiration: Date.now() + 3600000, // Set the expiration date to 1 hour from the current time
      }
    );

    // Handle the case when the user is not found
    if (!user) {
      // User not found, handle the error or send an appropriate response
      throw new Error('User not found');
    }

    // Token saved successfully
    console.log('Reset token saved:', resetToken);
  } catch (error) {
    // Handle the error or send an appropriate response
    console.error('Error saving reset token:', error);
    throw error;
  }
}

// Helper function to send the password reset email
async function sendEmail(to, subject, html) {
  // Configure the email transporter (replace the options with your own SMTP server settings)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'doylej1616@gmail.com',
      pass: 'Tiauna624?',
    },
  });

  // Compose the email message
  const message = {
    from: 'doylej1616@gmail.com',
    to,
    subject,
    html,
  };

  // Send the email
  await transporter.sendMail(message);
}

app.get('/', cors(), (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'Components', 'home.jsx'));
});

app.listen(3100, () => {
  console.log('Server is running');
});
