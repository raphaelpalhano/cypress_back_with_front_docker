const express = require('express');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const compression = require('compression');
const swaggerFile = require('../../swagger_output.json');
const appSettings = require('../../config/appSettings');

require('dotenv');

const app = express();
app.use(compression());

/**
 * Using express-session middleware. Be sure to familiarize yourself with available options
 * and set them as desired. Visit: https://www.npmjs.com/package/express-session
 */
const sessionConfig = {
  secret: appSettings.sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: appSettings.secure,
  },
};

app.use(session(sessionConfig));

const router = require('./controllers');

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

app.use(router);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Msal Node Auth Code Sample app listening on port !${process.env.SERVER_PORT}`);
});

