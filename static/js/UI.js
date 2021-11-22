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
            net.Load("glider_gun")
        })
        $("#control").append(button)


        var button = $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Clear',
            id: 'clear'
        })
        button.on("click", function () {
            $("#audio")[0].pause()
            net.Load("empty")
        })
        $("#control").append(button)


        var button = $(document.createElement('button')).prop({
            type: 'button',
            innerHTML: 'Export',
            id: 'export'
        })
        button.on("click", function () {
            net.Save()
        })
        $("#control").append(button)
    }

    checkbox_generate(arr) {
        function compare(a, b) {
            if (a.nr < b.nr) {
                return -1;
            }
            if (a.nr > b.nr) {
                return 1;
            }
            return 0;
        }

        arr.sort(compare);
        for (var r = 0; r < 9; r++) {
            console.log(arr[r])
            var nr = arr[r].nr
            var value = arr[r].value
            var input = $(document.createElement('input')).prop({
                type: 'checkbox',
                id: 'checkbox' + nr,
                class: 'css-checkbox',
                checked: 'checked'
            })
            if (value != 'true')
                input.prop({
                    checked: ''
                })
            var label = $(document.createElement('label')).prop({
                for: 'checkbox' + r,
                class: 'css-label dark-check-cyan',
                innerHTML: r
            })
            $("#check_form").append(input)
            $("#check_form").append(label)

            if (r % 3 == 2)
                $("#check_form").append($(document.createElement('br')))
        }
    }
}