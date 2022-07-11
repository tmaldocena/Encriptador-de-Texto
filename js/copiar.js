var textoSalida = document.querySelector("#result");

var copyBoton = document.querySelector("#copyBoton");

copyBoton.addEventListener("click", function(){
    textoSalida.select();
    document.execCommand("copy");
});