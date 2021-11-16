var express = require("express");
var app = express();

const PORT = 8000;

var path = require("path");
const cors = require("cors");
var favicon = require('serve-favicon');
var bodyParser = require('body-parser')
var Datastore = require('nedb')

var baza = new Datastore({
	filename: 'levels.db',
	autoload: true
});

app.use(cors());

app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.static('static'))

app.use(favicon(path.join('static', '/favicon.ico')))
app.get('/favicon.ico', (req, res) => res.status(204));


/*
app.get('/', function (req, res) {
	res.send(data)
});*/
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"))
})

app.post("/save", function (req, res) {
	baza.find({}, function (err, docs) {
		var arr = JSON.parse(JSON.stringify(docs))
		var tablica = {
			"nr": arr.length,
			"nazwa": "",
			"tablica": JSON.parse(req.body.obj)
		}
		baza.insert(tablica, function (err, newDoc) {
		});
	});
})
app.post("/load", function (req, res) {
	baza.find({ "nazwa": req.body.type }, function (err, docs) {
		res.send(JSON.parse(JSON.stringify(docs))[0].tablica)
	});
})

app.listen(PORT, function () {
	console.log("start serwera na porcie " + PORT)
})