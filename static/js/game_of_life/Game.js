//console.log("wczytano plik Game.js")

class Game {

    constructor() {
        this.play = false
        this.boxes = $("#game_board")[0].children
        this.rules = {}
        this.color = true
        this.sound = false
        this.speed = 150
        this.border_mode = false
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
            if (game.color)
                var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            else
                var randomColor = 'FFFFFF';
            game.draw("#" + randomColor)
            tabs.zero = new Array

            for (var x = 0; x < board.size_x; x++) {
                tabs.zero[x] = []
                for (var y = 0; y < board.size_y; y++) {
                    tabs.zero[x][y] = 0
                }
            }
            setTimeout(function () { game.start() }, game.speed);
        }
    }

    von_neumann(x, y, size_x, size_y, tab) {
        x = parseInt(x)
        y = parseInt(y)

        if (game.border_mode) {
            var suma = 0;
            try { suma += tab[x + 1][y] } catch { }
            try { suma += tab[x - 1][y] } catch { }
            try { suma += tab[x][y + 1] } catch { }
            try { suma += tab[x][y - 1] } catch { }
            try { suma += tab[x + 1][y + 1] } catch { }
            try { suma += tab[x + 1][y - 1] } catch { }
            try { suma += tab[x - 1][y + 1] } catch { }
            try { suma += tab[x - 1][y - 1] } catch { }
        }
        else {
            var suma = (
                tab[(x - 1 + size_x) % size_x][(y + size_y) % size_y] +
                tab[(x + 1 + size_x) % size_x][(y + size_y) % size_y] +
                tab[(x + size_x) % size_x][(y + 1 + size_y) % size_y] +
                tab[(x + size_x) % size_x][(y - 1 + size_y) % size_y] +
                tab[(x + 1 + size_x) % size_x][(y + 1 + size_y) % size_y] +
                tab[(x + 1 + size_x) % size_x][(y - 1 + size_y) % size_y] +
                tab[(x - 1 + size_x) % size_x][(y + 1 + size_y) % size_y] +
                tab[(x - 1 + size_x) % size_x][(y - 1 + size_y) % size_y]
            )
        }

        tabs.suma_tab[x][y] = suma
        if (tab[x][y] == 0 && suma == 3) {
            tabs.new_tab[x][y] = 1

        } else if (tab[x][y] == 1) {
            if (game.rules[suma] == 'false') {
                tabs.new_tab[x][y] = 0
            } else {
                tabs.new_tab[x][y] = 1
            }
        }

    }

    draw(color) {
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