$(document).ready(function() {
    
    $.ajax({
        url: "http://localhost:3000/api/film"
    }).then(function(data) {

        $.each(data, function(i, d) {
            $('#slcPelicula').append('<option value="' + d.film_id + '">' + d.title + '</option>');
        });
    });

    $.ajax({
        url: "http://localhost:3000/api/customer"
    }).then(function(data) {

        $.each(data, function(i, d) {
            $('#slcCliente').append('<option value="' + d.customer_id + '">' + d.first_name + ' ' + d.last_name + '</option>');
        });
    });

    $.ajax({
        url: "http://localhost:3000/api/staff"
    }).then(function(data) {

        $.each(data, function(i, d) {
            $('#slcEmpleado').append('<option value="' + d.staff_id + '">' + d.first_name + ' ' + d.last_name + '</option>');
        });
    });

    $('#btnTerminar').on('click', function(){
        var fechaEntrega = $('#entrega').val();
        var inventario = $('#slcPelicula').val();
        var empleado = $('#slcEmpleado').val();
        var cliente = $('#slcCliente').val();
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/rental",
            data: { 
                    "inventory_id" : inventario,
                    "customer_id" : cliente,
                    "return_date" : fechaEntrega,
                    "staff_id" : empleado         
            },
            success: alert("Venta completada"),
            dataType: "json"
        });
    });
    //$('#datetimepicker1').datetimepicker();
    
});