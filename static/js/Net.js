class Net {
    constructor() {

    }
    Save() {
        $.ajax({
            url: "/save",
            data: {
                obj: JSON.stringify(tabs.tab),
            },
            type: "POST",
            success: function (data) {
                console.log("saving")
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    Load(type) {
        $.ajax({
            url: "/load",
            data: {
                obj: JSON.stringify(tabs.tab),
                type: type
            },
            type: "POST",
            success: function (data) {
                game.play = false
                tabs.tab = data
                game.draw("white")
                console.log("loading")
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
}