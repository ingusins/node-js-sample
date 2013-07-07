var express = require('express');
var fs = require('fs');
var file="index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile(file, function (err, data) {
    if (err) throw err;
    //console.log(data);
    response.send('data');
  });
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
