console.log("wczytano plik Box.js")
class Box {

    constructor(x, y, bok) {
        this.div = document.createElement("div")
        this.div.id = "id_" + x + "_" + y
        this.div.style.border
        this.div.style.position = "absolute"
        this.div.style.height = bok + "px"
        this.div.style.width = bok + "px"
        this.div.style.top = (x * (2 * bok + 2)) + "px"
        this.div.style.left = (y * (2 * bok + 2)) + "px"
        this.div.className = "box"
        this.div.style.padding = board.padding + "px"
    }

    fun() {



        function create_box(x, y, bok) {
            box.addEventListener("click", function () {
                temp_x = this.id.split("_")[1]
                temp_y = this.id.split("_")[2]
                if (tab[temp_x][temp_y] == 0) {
                    this.style.backgroundColor = "white"
                    tab[temp_x][temp_y] = 1
                } else if (tab[temp_x][temp_y] == 1) {
                    this.style.backgroundColor = "black"
                    tab[temp_x][temp_y] = 0
                }
            })
        }

        function board(size_x, size_y, bok) {
            for (x = 0; x < size_x; x++) {
                suma_tab[x] = []
                new_tab[x] = []
                zero[x] = []
                tab[x] = []
                for (y = 0; y < size_y; y++) {
                    suma_tab[x][y] = 0
                    new_tab[x][y] = 0
                    zero[x][y] = 0
                    tab[x][y] = 0

                    create_box(x, y, bok)
                    main.append(box)
                }
            }
        }







        board(size_x, size_y, box_side)

        tab = [...glider_gun]
        game.draw("white")
    }
}
