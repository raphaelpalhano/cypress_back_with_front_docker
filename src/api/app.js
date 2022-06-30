const express = require('express');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const compression = require('compression');
const swaggerFile = require('../../swagger_output.json');
const appSettings = require('../../config/appSettings');
const msid = require('../../helpers/msidExpress');

const app = express();
app.use(compression());

/** x
 * Using express-session middleware. Be sure to familiarize yourself with available options
 * and set them as desired. Visit: https://www.npmjs.com/package/express-session
 */
app.use(
  session({
    secret: appSettings.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: appSettings.secure,
    },
  }),
);
app.use(msid.initialize());
// common routes
const router = require('./controllers');

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

app.use(router);

app.listen(appSettings.port, () => console.log(`App listening on port ${appSettings.port}!`));
