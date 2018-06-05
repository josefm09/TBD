$(document).ready(function() {
    
    $.ajax({
        url: "http://localhost:3000/api/film"
    }).then(function(data) {

        $.each(data, function(i, d) {
            if(d.length != 0){
                $('#dataTable tbody').append('<tr><td>' + d.title + '</td><td>' + d.rental_duration + '</td><td>' + d.release_year + '</td><td><button class="btn btn-danger" value="' + d.film_id + '" id="btnEliminar">Eliminar</button></td></tr>' );
            }
        });
    });

    $.ajax({
        url: "http://localhost:3000/api/language"
    }).then(function(data) {

        $.each(data, function(i, d) {
            $('#slcLenguaje').append('<option value="' + d.language_id + '">' + d.name + '</option>');
        });
    });

    $('#btnNuevo').click(function(){
        $('#modal').modal('show'); 
    });

    $('#dataTable').on('click', '#btnEliminar',function(){
        var value = $(this).attr("value");
        $.ajax({
            type:"PATCH",
            url:"http://localhost:3000/api/film/"+value,
            data:{ "length" : 0 },
            success:function(result) {
                location.reload();
            }
        });
    });

    $('#agregar').click(function(){
        var lenguaje = $('#slcLenguaje').val();
        var titulo = $('#txtTitulo').val();
        var descripcion = $('txtDescripcion').val();
        var anio = $('#txtAnio').val();
        var dias = $('#txtDias').val();
        var duracion = $('#txtDuracion').val();
        var costo = $('#txtCosto').val();
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/api/film",
            data: { 
                    "title" : titulo,
                    "description" : descripcion,
                    "release_year" : anio,
                    "language_id" : lenguaje,
                    "rental_duration" : dias,
                    "length" : duracion,
                    "replacement_cost" : costo         
            },
            success: alert("Pelicula agregada"),
            dataType: "json"
        });
        $('#modal').modal('hide');
    });


});