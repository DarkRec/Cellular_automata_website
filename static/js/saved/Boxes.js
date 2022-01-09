class Boxes {
    constructor() { }
    
    generate(arrays){
        arrays.forEach(element => {
            
        var a = $(document.createElement('a')).prop({
            class:'boxes_a',
            innerHTML:element.nazwa,
            href:element.nazwa
        })
        var div = $(document.createElement('div')).prop({
            class:'boxes_div',
            innerHTML:element.nazwa
        })
        var img= $(document.createElement('img')).prop({
            src:'../img/saves/'+element.nazwa+'.png'
        })
        $("#control").append(a)
        div.append(img)
        var a = $(document.createElement('a')).prop({
            href:element.nazwa
        })
        a.append(div)
        $("#container").append(a)
        });
    }
}