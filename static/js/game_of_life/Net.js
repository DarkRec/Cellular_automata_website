class Net {
    constructor() { }
    Save() {
        if($("#export_input")[0].value.trim() != ''){
        $.ajax({
            url: "/save",
            data: {
                obj: JSON.stringify(tabs.tab),
                name:$("#export_input")[0].value
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
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }

    RulesUpdate(nr, checked) {
        $.ajax({
            url: "/rulesupdate",
            data: {
                nr: nr,
                checked: checked
            },
            type: "POST",
            success: function (data) {
                game.rules = data
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }

    RulesLoadtoCheckbox() {
        $.ajax({
            url: "/rulesloadtocheckbox",
            data: {},
            type: "POST",
            success: function (data) {
                ui.checkbox_generate(data)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }

    GameRules() {
        $.ajax({
            url: "/rulesloadtocheckbox",
            data: {},
            type: "POST",
            success: function (data) {
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
}