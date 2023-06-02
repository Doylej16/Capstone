const express = require('express');
const collection = require('../mongo');
const bcrypt = require('bcrypt');
const { user } = require('../models');
const cors = require('cors');
const app = express();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dbConfig = require('../config/config.js');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://skxehfhc:Gobo77ZLoZws53LHTQSEG4ZufYN9-wpf@mahmud.db.elephantsql.com/skxehfhc', // Replace with your ElephantSQL connection string
  ssl: {
    rejectUnauthorized: false,
  },
});

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
      pool,
      tableName: 'sessions',
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const userRecord = await user.findOne({ where: { email } });

      if (!userRecord) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      const passwordMatch = await bcrypt.compare(password, userRecord.password);

      if (!passwordMatch) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      return done(null, userRecord);
    } catch (error) {
      return done(error);
    }
  })
);

// Serialize and deserialize user for sessions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (email, done) => {
  try {
    const userRecord = await user.findOne({ where: { email } });
    done(null, userRecord);
  } catch (error) {
    done(error);
  }
});

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Not authenticated' });
};

// API endpoint for adding a character to favorites
app.post('/api/addToFavorites', isAuthenticated, async (req, res) => {
  const { characterId } = req.body;
  const userId = req.user.id; // Assuming you have the user ID available in the request object

  try {
    // Add the character ID to the user's favorites (replace with your database logic)
    const userRecord = await user.findOne({ where: { id: userId } });
    if (userRecord) {
      userRecord.favorites.push(characterId);
      await userRecord.save();
      res.json({ message: 'Character added to favorites' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get("/signup", cors(), (req,res)=>{

})

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await user.build({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    await newUser.save();
console.log('User saved:', newUser);

    res.json({ name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));


app.get('/', cors(), (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'Components', 'home.jsx'));
});

app.listen(3100, () => {
  console.log('server is running');
});