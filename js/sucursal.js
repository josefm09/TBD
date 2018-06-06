$(document).ready(function() {
    
    $.ajax({
        url: "http://localhost:3000/api/address"
    }).then(function(data) {

        $.each(data, function(i, d) {
            if(d.country_id != 0){
                $('#dataTable tbody').append('<tr><td>' + d.address + '</td><td>' + d.district + '</td><td>' + d.phone + '</td><td><button class="btn btn-danger" value="' + d.address_id + '" id="btnEliminar">Eliminar</button></td></tr>' );
            }
        });
    });

    $.ajax({
        url: "http://localhost:3000/api/city"
    }).then(function(data) {

        $.each(data, function(i, d) {
            $('#slcCiudad').append('<option value="' + d.city_id + '">' + d.city + '</option>');
        });
    });

    $('#btnNuevo').click(function(){
        $('#modal').modal('show'); 
    });

    $('#dataTable').on('click', '#btnEliminar',function(){
        var value = $(this).attr("value");
        $.ajax({
            type:"PATCH",
            url:"http://localhost:3000/api/city/"+value,
            data:{ "country_id" : 0 },
            success:function(result) {
                location.reload();
            }
        });
    });

    $('#agregar').click(function(){
        var ciudad = $('#slcCiudad').val();
        var nombre = $('#txtNombre').val();
        var distrito = $('#txtDistrito').val();
        var cp = $('#txtCp').val();
        var telefono = $('#txtTelefono').val();
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/address",
            data: { 
                    "address" : nombre,
                    "district" : distrito,
                    "city_id" : ciudad,
                    "postal_code" : cp,
                    "phone" : telefono       
            },
            success: alert("Sucursal agregada"),
            dataType: "json"
        });
        $('#modal').modal('hide');
    });
    
});