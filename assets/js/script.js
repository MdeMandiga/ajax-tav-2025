$(document).ready(function(){

})
//funcion ajax
$.ajax({
    url: 'texto.txt', // busca la direccion del archivo
    type: 'get', // leer equivale a leer el post
    dataType: 'txt', //define el tipo de archivo
    success: function(respuesta){
        document.write('respuesta')
    },
    error: function(){
        document.write(error)
    }
});
