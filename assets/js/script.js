$(document).ready(function(){

})
//funcion ajax
$.ajax({
    url: 'assets/js/texto.txt', // busca la direccion del archivo
    type: 'get', // leer equivale a leer el post
    dataType: 'text', //define el tipo de archivo
    success: function(respuesta){
        document.write('respuesta')
    },
    error: function(error){
        document.write(error)
    }
});
