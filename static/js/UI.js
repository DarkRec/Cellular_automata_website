// obsługa interfejsu aplikacji - przycisków
//(klikologia w interfejsie) 
console.log("wczytano plik Ui.js")

class Ui {

    constructor() {
        console.log("konstruktor klasy Ui")
        this.buttons_generate()
    }
    buttons_generate() {
        var button = $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Start',
            id: 'start'
        })
        button.on("click", function () {
            $("#audio").trigger('load');
            $("#audio").trigger('play');
            $("#audio")[0].volume = 0.1
            if (!game.play) {
                game.play = true
                game.start()
            }
        })
        $("#control").append(button)


        var button = $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Stop',
            id: 'stop'
        })
        button.on("click", function () {
            $("#audio")[0].pause()
            game.play = false
            game.draw("white")
        })
        $("#control").append(button)


        var button = $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Reset',
            id: 'reset'
        })
        button.on("click", function () {
            $("#audio")[0].pause()
            game.play = false
            tabs.tab = tabs.glider_gun
            game.draw("white")
        })
        $("#control").append(button)

        var button = $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Clear',
            id: 'clear'
        })
        button.on("click", function () {
            $("#audio")[0].pause()
            game.play = false
            tab.stab = tabs.clear
            draw("white")
        })
        $("#control").append(button)
    }
}