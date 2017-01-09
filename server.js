var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
  fs.readFile('./index.html', 'utf-8', function(err, data){
    if (err) throw err;
    res.set('Content-Type', 'text/html');
    res.send(data);
  });
});

var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
