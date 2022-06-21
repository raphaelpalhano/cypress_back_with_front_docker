const express = require('express');
const session = require('express-session');
const path = require('path');

const MsIdExpress = require('microsoft-identity-express');
const appSettings = require('../config/appSettings');
const mainController = require('./controllers/mainController');
require('dotenv/config');

const SERVER_PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, './public')));

/**
 * Using express-session middleware. Be sure to familiarize yourself with available options
 * and set them as desired. Visit: https://www.npmjs.com/package/express-session
 */
app.use(
  session({
    secret: 'ENTER_YOUR_SECRET_HERE',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
    },
  }),
);

const msid = new MsIdExpress.WebAppAuthClientBuilder(appSettings).build();
app.use(msid.initialize());

// app routes
app.get('/', (req, res) => res.redirect('/home'));
app.get('/home', mainController.getHomePage);

// authentication routes
app.get(
  '/signin',
  msid.signIn({
    postLoginRedirect: '/',
  }),
);

app.get(
  '/signout',
  msid.signOut({
    postLogoutRedirect: '/',
  }),
);

app.get('/id', msid.isAuthenticated(), mainController.getIdPage);

app.get('/error', (req, res) => res.redirect('/500.html'));

app.get('/unauthorized', (req, res) => res.redirect('/401.html'));

app.get('*', (req, res) => res.status(404).redirect('/404.html'));

app.listen(SERVER_PORT, () => console.log(`App listening on port ${SERVER_PORT}!`));

module.exports = app;
