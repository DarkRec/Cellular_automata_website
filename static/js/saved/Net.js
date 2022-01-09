class Net {
    constructor() { }
    load_arrays() {
        $.ajax({
            url: "/load_arrays",
            data: {

            },
            type: "POST",
            success: function (data) {
                boxes.generate(data)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
}