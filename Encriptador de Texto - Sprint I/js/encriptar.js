var botonEncriptar = document.querySelector("#boton-encriptar");
var textoEntrada = document.querySelector("#encripto");
var textoSalida = document.querySelector("#result");
var candado = document.querySelector("#candado");

textoEntrada.value= "";
textoSalida.value= "";

botonEncriptar.addEventListener("click", function(event){
    if(textoEntrada.value == ""){
        alert("No se ha ingresado ningun Texto para Encriptar");
        return;
    }
    textoSalida.value= "";
    event.preventDefault();
    candado.classList.remove("invisible");
    reset();
    setTimeout(function(){
        encriptar();
    },2500);
    setTimeout(function(){
        candado.classList.add("invisible");
    },2505);
});

function encriptar(){
    var text = textoEntrada.value;
    text = text.replaceAll(/á/g,"a");
    text = text.replaceAll(/é/g,"e");
    text = text.replaceAll(/í/g,"i");
    text = text.replaceAll(/ó/g,"o");
    text = text.replaceAll(/ú/g,"u");

    text = text.replaceAll(/e/g,"enter");
    text = text.replaceAll(/i/g,"imes");
    text = text.replaceAll(/a/g,"ai");
    text = text.replaceAll(/o/g,"ober");
    text = text.replaceAll(/u/g,"ufat");

    textoSalida.value = text;
    
    return true;
}

/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/ 


function reset() {
    candado.src = candado.getAttribute('src'); 
  }