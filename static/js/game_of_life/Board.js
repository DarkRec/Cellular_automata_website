//console.log("wczytano plik Board.js")
class Board {

    constructor() {
        //console.log("konstruktor klasy Board")

        this.box_side = 10     //rozmiar komórki
        this.size_x = 60
        this.size_y = 100
        //this.padding = 5
    }

    pageload() {
        board.create(board.size_x, board.size_y, board.box_side)
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
                game_board.append(box.div)
            }
        }
    }
}