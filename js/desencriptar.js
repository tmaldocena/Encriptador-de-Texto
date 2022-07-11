var botonDesencriptar = document.querySelector("#boton-desencriptar");
var textoEntrada = document.querySelector("#encripto");
var textoSalida = document.querySelector("#result");
var candado = document.querySelector("#candado");

textoEntrada.value= "";
textoSalida.value= "";

botonDesencriptar.addEventListener("click", function(event){
    if(textoEntrada.value == ""){
        alert("No se ha ingresado ningun Texto para Desencriptar");
        return;
    }
    textoSalida.value= "";
    event.preventDefault();
    candado.classList.remove("invisible");
    reset();
    setTimeout(function(){
        desencriptar();
    },2500);
    setTimeout(function(){
        candado.classList.add("invisible");
    },2505);
});

function desencriptar(){
    var text = textoEntrada.value;
    text = text.replaceAll(/enter/g,"e");
    text = text.replaceAll(/imes/g,"i");
    text = text.replaceAll(/ai/g,"a");
    text = text.replaceAll(/ober/g,"o");
    text = text.replaceAll(/ufat/g,"u");

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