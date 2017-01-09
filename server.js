var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var favicon = require('serve-favicon');

var app = express();

// mounting middleware
app.use(morgan('dev'));
app.use(favicon(__dirname + '/public/favicon.ico'));

// built in express middleware. if a request URL matches a file in
// public, serve it, otherwise call next
app.use(express.static(__dirname + '/public'));

// if public has an index.html this won't be served.
app.get('/', function(req, res) {
  res.send("Hello from server.js");
});

app.get('/about', function(req, res){
  // send back a status 302 location: '/bio.html'
  // browser will do another request
  res.redirect('/bio.html');
});

var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
