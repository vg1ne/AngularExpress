// var express = require('express');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var path = require('path');
//
// var app = express();
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, './src/assets')));
//
// //app.use('/api/', require('src/main.ts'));
//
// app.use(function(req, res, next) {
//   // error handling
// });
//
//
// var server = app.listen(3000, function() {
//   // shows the connection etc
// });
//
// module.exports = app;
let express = require('express');
let app = express();
let path = require('path');

//app.use(express.static(__dirname + '/src'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve('../src/index.html')); // load our public/index.html file
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
