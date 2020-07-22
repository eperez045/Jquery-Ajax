$(document).ready(function() {

    $("#botonChistes").click(function(e) {
        e.preventDefault();

        $.get("http://api.icndb.com/jokes/random", function(data) {
            $("#chiste").html(`${data.value.joke}`);
        });
    });

});