

function encriptar() {
    var texto = document.getElementById("inputTexto").value;
    if (texto.length!=0){
        var textoCifrado = texto.replace(/e/igm, "enter");
        textoCifrado = textoCifrado.replace(/i/igm, "imes")
        textoCifrado = textoCifrado.replace(/a/igm, "ai")
        textoCifrado = textoCifrado.replace(/o/igm, "ober")
        textoCifrado = textoCifrado.replace(/u/igm, "ufat")

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto1").innerHTML = textoCifrado;
    document.getElementById("texto2").style.display = "none";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
    }
    else {
        alert("Primero debe ingresar un texto")
    }
    
}   

function desencriptar() {

    var texto = document.getElementById("inputTexto").value;
    if (texto.length!=0){
    var textoCifrado = texto.replace(/enter/igm, "e")
    textoCifrado = textoCifrado.replace(/imes/igm, "i")
    textoCifrado = textoCifrado.replace(/ai/igm, "a")
    textoCifrado = textoCifrado.replace(/ober/igm, "o")
    textoCifrado = textoCifrado.replace(/ufat/igm, "u")

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto1").innerHTML = textoCifrado;
    document.getElementById("texto2").style.display = "none";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
    }
    else {
        alert("No hay ningún texto para descifrar")
    }
}

function copiar() {
    var inputTextoCifrado = document.querySelector("#texto1");
    navigator.clipboard.writeText(inputTextoCifrado.innerText)
      .then(function() {
        alert("Texto copiado al portapapeles");
      })
      .catch(function() {
        alert("No se pudo copiar el texto al portapapeles");
      });
  }

