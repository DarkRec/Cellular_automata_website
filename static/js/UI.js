// obsługa interfejsu aplikacji - przycisków
//(klikologia w interfejsie) 
console.log("wczytano plik Ui.js")

class Ui {

    constructor() {
        console.log("konstruktor klasy Ui")
        this.buttons_generate()
    }
    buttons_generate() {
        //control = document.getElementById("control")

        var button = $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Start',
            class: 'btn-styled',
            id: 'start'
        })

        console.log($("#control").click())
        button.on("click", function () {
            console.log("click")
            console.log(game.play)
            if (!game.play) {
                game.play = true
                game.start()
            }
        })
        $("#control").append(button)
        console.log($("#control").click())


        var button = $(document.createElement('button'))
        button.id = "stop"
        button.innerText = "Stop"

        button.onclick = function (e) {
            play = false
            draw("white")
        }
        $("#control").append(button)


        var button = $(document.createElement('button'))
        button.id = "reset"
        button.innerText = "Reset"
        button.onclick = function (e) {
            play = false
            tab = [...glider_gun]
            draw("white")
        }
        $("#control").append(button)

        var button = $(document.createElement('button'))
        button.id = "clear"
        button.innerText = "Clear"
        button.onclick = function (e) {
            play = false
            tab = [...clear]
            draw("white")
        }
        $("#control").append(button)
    }
}