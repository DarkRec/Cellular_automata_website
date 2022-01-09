// start całości projektu, utworzenie obiektów poszczególnych klas

//console.log("wczytano plik Main.js")

var net;
var game;
var ui;
var board;
var box;
var tabs;
var music;

$(document).ready(function () {
    net = new Net()
    game = new Game() // utworzenie obiektu klasy Net
    ui = new Ui() // utworzenie obiektu klasy Ui
    board = new Board()
    box = new Box()
    tabs = new Tabs()
    music = new Music()
})