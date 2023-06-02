const express = require('express');
const collection = require('./mongo');
const bcrypt = require('bcrypt');
const { user, MarvelCharacter } = require('./models');
const cors = require('cors');
const app = express();
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dbConfig = require('./config/config.js');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://skxehfhc:Gobo77ZLoZws53LHTQSEG4ZufYN9-wpf@mahmud.db.elephantsql.com/skxehfhc',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

passport.serializeUser((user, done) => {
  done(null, user.email);
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

app.use(cors());
app.use(express.static('public'));

app.post('/api/favorites', isAuthenticated, async (req, res) => {
  try {
    console.log('Request body:', req.body);

    const { name, description, thumbnail_url } = req.body;
    const userEmail = req.user.email;

    console.log('User email:', userEmail);

    MarvelCharacter.create({ name, description, thumbnail_url, userEmail })
      .then((character) => {
        console.log('Character added:', character.toJSON());
        res.sendStatus(201);
      })
      .catch((error) => {
        console.error('Error adding character:', error);
        res.sendStatus(500);
      });
  } catch (error) {
    console.error('Error processing request:', error);
    res.sendStatus(400);
  }
});


app.get('/signup', cors(), (req, res) => {
});

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
  console.log('Server is running');
});
