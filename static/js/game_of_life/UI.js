// obsługa interfejsu aplikacji - przycisków
//(klikologia w interfejsie) 
//console.log("wczytano plik Ui.js")

class Ui {

    constructor() {
        //console.log("konstruktor klasy Ui")
        this.buttons_generate()
        this.sidebar = false
        $("#game_board")[0].onmousedown = function () {
            board.select = true
        }
        $("#game_board")[0].onmouseup = function () {
            board.select = false
        }
    }


    buttons_generate() {

        var img = $(document.createElement('img')).prop({
            src: '../img/css/colors.png',
            id: 'color'
        })

        img.on("click", function () {
            if (game.color) {
                $("#color")[0].src = '../img/css/white.png'
                game.color = false
            }
            else {
                $("#color")[0].src = '../img/css/colors.png'
                game.color = true
            }
        })

        $("#control").append(img)

        var img = $(document.createElement('img')).prop({
            src: '../img/css/sound_off.png',
            id: 'sound'
        })

        img.on("click", function () {
            if (game.sound) {
                $("#sound")[0].src = '../img/css/sound_off.png'
                game.sound = false
                $("#audio")[0].volume = 0
            }
            else {
                $("#sound")[0].src = '../img/css/sound_on.png'
                game.sound = true
                $("#audio")[0].volume = 0.1
            }
        })

        $("#control").append(img)

        var img = $(document.createElement('img')).prop({
            src: '../img/css/no_border.png',
            id: 'border'
        })

        img.on("click", function () {
            if (game.border_mode) {
                $("#border")[0].src = '../img/css/no_border.png'
                game.border_mode = false
            }
            else {
                $("#border")[0].src = '../img/css/border.png'
                game.border_mode = true
            }
        })

        $("#control").append(img)

        var a = $(document.createElement('a')).prop({
            type: 'a',
            innerHTML: 'Start',
            id: 'start',
            href: '#'
        })
        a.on("click", function () {
            music.playing = false
            music.play()
            if (!game.play) {
                game.play = true
                net.GameRules()
                game.start()
            }
        })
        $("#control").append(a)



        var a = $(document.createElement('a')).prop({
            type: 'a',
            innerHTML: 'Stop',
            id: 'stop',
            href: '#'
        })
        a.on("click", function () {
            music.playing = true
            music.play()
            game.play = false
            game.draw("white")
        })
        $("#control").append(a)



        var a = $(document.createElement('a')).prop({
            type: 'a',
            innerHTML: 'Reset',
            id: 'reset',
            href: '#'
        })
        a.on("click", function () {
            $("#audio")[0].pause()
            if ($("#footer")[0].innerHTML == '')
                net.Load("glider gun")
            else
                net.Load($("#footer")[0].innerHTML)
        })
        $("#control").append(a)



        var a = $(document.createElement('a')).prop({
            type: 'a',
            innerHTML: 'Clear',
            id: 'clear',
            href: '#'
        })
        a.on("click", function () {
            $("#audio")[0].pause()
            net.Load("empty")
        })
        $("#control").append(a)



        var a = $(document.createElement('a')).prop({
            innerHTML: 'Export',
            id: 'export',
            href: '#'
        })
        a.on("click", function () {
            net.Save()
        })
        $("#control").append(a)

        var input = $(document.createElement('input')).prop({
            type: 'text',
            placeholder: 'nazwa zapisu',
            id: 'export_input'
        })
        $("#control").append(input)

        var input = $(document.createElement('input')).prop({
            type: 'range',
            id: 'myRange',
            class: 'slider',
            min: 25,
            max: 300,
            step: 25,
            value: 150
        })
        input.on("change", function () {
            game.speed = this.value
        })
        $("#control").append(input)
    }


    checkbox_generate(arr) {
        game.rules = arr

        var div = $(document.createElement('div')).prop({
            innerHTML: 'Zasady sąsiedztwa:'
        })
        $("#rules-sidebar").append(div)
        var section = $(document.createElement('section')).prop({
            id: 'rules'
        })
        $("#rules-sidebar").append(section)

        for (var r = 0; r < 9; r++) {
            var input = $(document.createElement('input')).prop({
                type: 'checkbox',
                id: 'checkbox' + r,
                class: 'css-checkbox',
                checked: 'checked'
            })
            input.on("change", function () {
                net.RulesUpdate(this.id[8], this.checked)
            })

            if (arr[r] != 'true')
                input.prop({
                    checked: ''
                })
            var label = $(document.createElement('label')).prop({
                for: 'checkbox' + r,
                class: 'css-label dark-check-cyan',
                innerHTML: r
            })
            $("#rules").append(input)
            $("#rules").append(label)

            if (r % 3 == 2)
                $("#rules").append($(document.createElement('br')))

        }
    }

    game_board_functions() {
        $("#game_board").addEventListener("mouse", function () {

        })
    }
}