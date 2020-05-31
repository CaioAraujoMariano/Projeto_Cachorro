var leftSpace = 100;
var topSpace = 400;

$("#campo").keydown(evento => {
    if (evento.which == 37) {
        leftSpace -= 20;
        $("#cachorro").css("margin-left", leftSpace);
    }

    if (evento.which == 38) {
        topSpace -= 20;
        $("#cachorro").css("margin-top", topSpace);
    }

    if (evento.which == 39) {
        leftSpace += 20;
        $("#cachorro").css("margin-left", leftSpace);
    }

    if (evento.which == 40) {
        topSpace += 20;
        $("#cachorro").css("margin-top", topSpace);
    }
})