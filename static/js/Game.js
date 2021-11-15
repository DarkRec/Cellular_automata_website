console.log("wczytano plik Game.js")

class Game {

    constructor() {
        this.size_x = 30
        this.size_y = 50
        this.play = false
        this.boxes = $("#main")[0].children
        this.tick = 0
    }
    start() {
        if (game.play) {
            for (var key = 0; key < board.size_x * board.size_y; key++) {
                var box_x = (game.boxes[key].id).split("_")[1]
                var box_y = (game.boxes[key].id).split("_")[2]
                game.von_neumann(box_x, box_y, board.size_x, board.size_y, tabs.tab)
            }
            tabs.tab = tabs.new_tab
            tabs.new_tab = tabs.zero

            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            game.draw("#" + randomColor)
            tabs.zero = new Array

            for (var x = 0; x < board.size_x; x++) {
                tabs.zero[x] = []
                for (var y = 0; y < board.size_y; y++) {
                    tabs.zero[x][y] = 0
                }
            }
            setTimeout(function () { game.start() }, 125);
        }
    }

    von_neumann(x, y, size_x, size_y, tab) {
        var suma = (tab[(+x - 1 + size_x) % size_x][(+y + size_y) % size_y]
            + tab[(+x + 1 + size_x) % size_x][(+y + size_y) % size_y]
            + tab[(+x + size_x) % size_x][(+y + 1 + size_y) % size_y]
            + tab[(+x + size_x) % size_x][(+y - 1 + size_y) % size_y]
            + tab[(+x + 1 + size_x) % size_x][(+y + 1 + size_y) % size_y]
            + tab[(+x + 1 + size_x) % size_x][(+y - 1 + size_y) % size_y]
            + tab[(+x - 1 + size_x) % size_x][(+y + 1 + size_y) % size_y]
            + tab[(+x - 1 + size_x) % size_x][(+y - 1 + size_y) % size_y])

        tabs.suma_tab[x][y] = suma
        if (tab[x][y] == 0 && suma == 3) {
            tabs.new_tab[x][y] = 1

        } else if (tab[x][y] == 1) {
            if (suma < 2 || suma > 3) {
                tabs.new_tab[x][y] = 0
            } else {
                tabs.new_tab[x][y] = 1
            }
        }

    }

    draw(color) {
        game.tick++
        if (game.tick == 750) {
            tabs.tab = tabs.glider_gun
            game.tick = 0
        }
        for (var key = 0; key < board.size_x * board.size_y; key++) {
            var box_x = (game.boxes[key].id).split("_")[1]
            var box_y = (game.boxes[key].id).split("_")[2]
            if (tabs.tab[box_x][box_y] == 0)
                document.getElementById("id_" + box_x + "_" + box_y).style.backgroundColor = "black"
            else if (tabs.tab[box_x][box_y] == 1) {
                document.getElementById("id_" + box_x + "_" + box_y).style.backgroundColor = color
            }
        }
    }
}
