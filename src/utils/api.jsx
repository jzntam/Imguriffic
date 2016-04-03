var Fetch   = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey  = require('./api_key.jsx') || process.env.IMGUR_API_KEY;

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json()
    })
  }
};
