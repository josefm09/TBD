$(document).ready(function() {
    
    $.ajax({
        url: "http://localhost:3000/api/customer/count"
    }).then(function(data) {
        $('#clientes').prepend(data[0].no_of_rows);
    });

    $.ajax({
        url: "http://localhost:3000/api/film/count"
    }).then(function(data) {
        $('#peliculas').prepend(data[0].no_of_rows);
    });

    $.ajax({
        url: "http://localhost:3000/api/rental/count"
    }).then(function(data) {
        $('#ventas').prepend(data[0].no_of_rows);
    });

    $.ajax({
        url: "http://localhost:3000/api/store/count"
    }).then(function(data) {
        $('#sucursales').prepend(data[0].no_of_rows);
    });
});