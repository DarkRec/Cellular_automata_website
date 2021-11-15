var express = require("express");
var app = express();

const PORT = 8000;

var path = require("path");
const cors = require("cors");
var favicon = require('serve-favicon');
app.use(cors());

app.use(express.static(__dirname + '/static'));
app.use(favicon(path.join(__dirname, 'static', '/favicon.ico')))
app.get('/favicon.ico', (req, res) => res.status(204));


/*
app.get('/', function (req, res) {
	res.send(data)
});*/
app.get('/', function (req, res) {
	res.sendFile('index.html', { root: __dirname })
});
app.listen(PORT, function () {
	console.log("start serwera na porcie " + PORT)
})