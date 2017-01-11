var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
  fs.readFile('./index.html', 'utf-8', function(err, data){
    if (err) throw err;
    var link = '<a href="/about">About</a>';
    res.set('Content-Type', 'text/html');
    res.send(data + link);
  });
});

app.get('/about', function(req, res) {
  var filename = 'bio.html';
  var filecontents = "Me-yow!";
  fs.writeFile(filename, filecontents, function(err) {
    if (err) throw err;
    console.log('bio file saved');
  });
  fs.readFile('./bio.html', 'utf-8', function(err, data){
    if (err) throw err;
    res.set('Content-Type', 'text/html');
    res.send(data);
  });
})

var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
