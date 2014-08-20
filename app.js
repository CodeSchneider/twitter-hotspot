var express = require('express');
var app = express();
var twitter = require('ntwitter');

var server = app.listen(3000, function () {
  console.log('Listening on port 3000');
});

app.get('/', function(req, res){
  res.render('index.ejs');
});
/*
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});*/

var twit = new twitter({
  consumer_key: '64IRCQgbIO1ZV5nOolI0jlXKA',
  consumer_secret: 'PPSF90qe7N4ggoTEM32FeU88kjVO8psTNHbJmBcicJGeK7HFPq',
  access_token_key: '2748040418-oNY0nS5PmOLpsn1Qz5JicUt29nh2d6OO0qLdsvr',
  access_token_secret: 'i65DAAIDrkiVKddNcutkwW4GfwLdIOksTqTIRXqqxDQnE'
});

twit.stream('statuses/filter', { track: ['als','bucket'] }, function(stream) {
  stream.on('data', function (data) {
    console.log(data.user.url);
  });
});
