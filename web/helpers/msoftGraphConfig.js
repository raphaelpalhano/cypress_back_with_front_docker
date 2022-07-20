const { default: axios } = require('axios');
const config = require('../config/msoftGraphSettings');

const formUrlEncoded = (x) => Object.keys(x).reduce((p, c) => `${p}&${c}=${encodeURIComponent(x[c])}`, '');

const getAccessToken = async () => {
  const data = formUrlEncoded({
    grant_type: 'client_credentials',
    client_id: config.clientId,
    client_secret: config.clientSecret,
    scope: config.graphScope,
  });
  const { access_token: accessToken } = await axios({
    method: 'post',
    url: `https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token/`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
  return accessToken;
};

const msoftGraph = async (method, url, data = {}, params = {}) => {
  const Authorization = `Bearer ${await getAccessToken()}`;
  const res = await axios({
    method,
    data,
    url,
    baseURL: config.graphEndpoint,
    params,
    headers: {
      Authorization,
      accept: 'application/json',
      'Content-Type': 'multipart/form-data, application/json',
    },
  })
    .then((response) => response.data)
    .catch((error) => ({
      status: error.response.status,
      data: error.response.data,
    }));
  return res;
};

module.exports = { getAccessToken, msoftGraph };
