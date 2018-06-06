$(document).ready(function() {
    
    $.ajax({
        url: "http://localhost:3000/api/staff"
    }).then(function(data) {

        $.each(data, function(i, d) {
            if(d.active == 1){
                $('#dataTable tbody').append('<tr><td>' + d.first_name + '</td><td>' + d.last_name + '</td><td>' + d.email + '</td><td><button class="btn btn-danger" value="' + d.staff_id + '" id="btnEliminar">Eliminar</button></td></tr>' );
            }
        });
    });

    $.ajax({
        url: "http://localhost:3000/api/address"
    }).then(function(data) {

        $.each(data, function(i, d) {
            $('#slcTienda').append('<option value="' + d.address_id + '">' + d.address + '</option>');
        });
    });

    $('#btnNuevo').click(function(){
        $('#modal').modal('show'); 
    });

    $('#dataTable').on('click', '#btnEliminar',function(){
        var value = $(this).attr("value");
        $.ajax({
            type:"PATCH",
            url:"http://localhost:3000/api/staff/"+value,
            data:{ "active" : 0 },
            success:function(result) {
                location.reload();
            }
        });
    });

    $('#agregar').click(function(){
        var tienda = $('#slcTienda').val();
        var nombre = $('#txtNombre').val();
        var apellido = $('#txtApellido').val();
        var email = $('#txtEmail').val();
        var usuario = $('#txtUsuario').val();
        var contrasena = $('#txtContrasena').val();
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/staff",
            data: { 
                    "store_id" : tienda,
                    "first_name" : nombre,
                    "last_name" : apellido,
                    "email" : email,
                    "address_id" : tienda,
                    "username" : usuario,
                    "password" : contrasena        
            },
            success: alert("Empleado agregado"),
            dataType: "json"
        });
        $('#modal').modal('hide');
    });
    
});