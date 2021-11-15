console.log("wczytano plik Board.js")
class Board {

    constructor() {
        console.log("konstruktor klasy Board")

        this.box_side = 10
        this.size_x = 30
        this.size_y = 50
        this.padding = 5
    }

    pageload() {
        board.create(board.size_x, board.size_y, board.box_side)

        tabs.tab = tabs.glider_gun
        game.draw("white")
    }

    create(size_x, size_y, bok) {
        for (var x = 0; x < size_x; x++) {
            tabs.suma_tab[x] = []
            tabs.new_tab[x] = []
            tabs.zero[x] = []
            tabs.tab[x] = []
            for (var y = 0; y < size_y; y++) {
                tabs.suma_tab[x][y] = 0
                tabs.new_tab[x][y] = 0
                tabs.zero[x][y] = 0
                tabs.tab[x][y] = 0

                var box = new Box(x, y, bok)
                main.append(box.div)
            }
        }
    }
}
