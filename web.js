var express = require('express');
var fs = require('fs');
var file="index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(file,'utf8'));
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
