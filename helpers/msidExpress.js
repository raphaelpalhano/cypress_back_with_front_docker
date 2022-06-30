const MsIdExpress = require('microsoft-identity-express');
const appSettings = require('../config/appSettings');

const Msid = new MsIdExpress.WebAppAuthClientBuilder(appSettings.msalConfig).build();

module.exports = Msid;
