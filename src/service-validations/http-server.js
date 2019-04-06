const axios = require('axios');

const urlReturns200 = ({ url }) => new Promise(async (resolve, reject) => {
  try {
    const results = await axios.get(url);
    resolve({ ready: true, response: results.data });
  } catch (error) { reject({ ready: false, error }); }
});


module.exports = { urlReturns200 };
