// const { default: axios } = require('axios');
// const config = require('../config/iguaSettings');
// igua api settings
const tokenMocked = 'ExampleToken'; // delete this line if you do not want to use the mocked token

const getIguaAccessToken = async () =>
  //   const { access_token: accessToken } = await axios({
  //     method: 'post', // add method here
  //     url: ``, //add url to get access token
  //     headers: {
  //       accept: 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     data,
  //   })
  //     .then((response) => response.data)
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  tokenMocked;
// remove tokenMocked if you do not want to use the mocked token
module.exports = { getIguaAccessToken };
