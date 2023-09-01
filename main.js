const express = require('express');
var querystring = require('querystring');
const app = express();
var id = '2e7099faa0774ee2bca7269d40e9965f';
var redirect_uri = 'http://localhost:3000';

var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  var state = generateRandomString(16);
app.get('/login', function(req, res) {

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: id,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.listen(3000)
console.log("running")