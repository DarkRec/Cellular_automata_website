class Music {

    constructor() {
        $("#audio").trigger('stop');
        this.load_song()
        this.playing = false
    }
    load_song() {
        $("#audio").trigger("load");
        $("#audio")[0].volume = 0
        this.playing = false
    }
    play() {
        if (this.playing) {
            $("#audio").trigger('pause'); // pauzuj granie
            this.playing = false
        }
        else {
            $("#audio").trigger('play');
            this.playing = true

            var timer = document.createElement('div')
            timer.id = "timer"
            timer.innerHTML = "0:00"
            $("#sterowanie").append(muza)

        }
    }
}