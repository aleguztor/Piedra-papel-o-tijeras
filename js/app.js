var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");
var empezar = document.getElementById("jugar");
var solucion = document.getElementById("solucion");
var reset = document.getElementById("reset");
var imagenmaq= document.getElementById("maquina");


var resultadohumano = document.getElementById("resultadohumano");
var resultadocomputador = document.getElementById("resultadocomputador");

var valorhumano = 0;
var valorpc = 0;

var piedra2 = document.querySelector(".piedra");

empezar.addEventListener("click", function () {
    solucion.innerText = "";
    solucion.innerText = "Elige una opción";
    // opcion para la maquina
    // 1 es piedra
    // 2 es papel
    // 3 es tijera
    piedra.disabled = false;
    papel.disabled = false;
    tijera.disabled = false;

    empezar.classList.add("novisible");
    reset.classList.remove("novisible");
});

reset.addEventListener("click", function () {
    valorhumano = 0;
    valorpc = 0;
    resultadocomputador.textContent = valorpc;
    resultadohumano.textContent = valorhumano;
    solucion.innerText = "";
    solucion.innerText = "Pulsa jugar para empezar";
    reset.classList.add("novisible");
    empezar.classList.remove("novisible");
    piedra.disabled = true;
    papel.disabled = true;
    tijera.disabled = true;
    imagenmaq.src= "multimedia/image_processing20200508-15150-13uv6ki.png";
});

function eleccionpiedra(valor) {
    switch (valor) {
        case 1:
            solucion.innerText = "";
            solucion.innerText = "Elegiste piedra, EMPATE";
            break;
        case 2:
            solucion.innerText = "";
            solucion.innerText = "Elegiste piedra, PIERDES";
            valorpc++;
            resultadocomputador.textContent = valorpc;
            break;
        case 3:
            solucion.innerText = "";
            solucion.innerText = "Elegiste piedra, GANAS";
            valorhumano++;
            resultadohumano.textContent = valorhumano;
            break;
    }
}
function eleccionpapel(valor) {
    switch (valor) {
        case 1:
            solucion.innerText = "";
            solucion.innerText = "Elegiste papel, GANAS";
            valorhumano++;
            resultadohumano.textContent = valorhumano;
            break;
        case 2:
            solucion.innerText = "";
            solucion.innerText = "Elegiste papel, EMPATE";

            break;
        case 3:
            solucion.innerText = "";
            solucion.innerText = "Elegiste papel, PIERDES";
            valorpc++;
            resultadocomputador.textContent = valorpc;
            break;
    }
}
function elecciontijera(valor) {
    switch (valor) {
        case 1:
            solucion.innerText = "";
            solucion.innerText = "Elegiste tijera, PIERDES";
            valorpc++;
            resultadocomputador.textContent = valorpc;
            break;
        case 2:
            solucion.innerText = "";
            solucion.innerText = "Elegiste tijera, GANAS";
            valorhumano++;
            resultadohumano.textContent = valorhumano;
            break;
        case 3:
            solucion.innerText = "";
            solucion.innerText = "Elegiste tijera, EMPATE";
            break;
    }
}

function imagenmaquina(valor){
    if(valor==1){
        imagenmaq.src= "multimedia/piedra.png";
    }

    if(valor==2){
        imagenmaq.src= "multimedia/paper.png";
    }
    if(valor==3){
        imagenmaq.src= "multimedia/tijera.png";
    }
}

piedra.addEventListener("click", function () {
    solucion.innerText = "";
    solucion.innerText = "Elegiste piedra.";

    var valormaquina = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    setTimeout(eleccionpiedra(valormaquina), 2000);
    imagenmaquina(valormaquina);
});

papel.addEventListener("click", function () {
    solucion.innerText = "";
    solucion.innerText = "Elegiste papel.";

    var valormaquina = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    setTimeout(eleccionpapel(valormaquina), 1000);
    imagenmaquina(valormaquina);
});

tijera.addEventListener("click", function () {
    solucion.innerText = "";
    solucion.innerText = "Elegiste tijera.";

    var valormaquina = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    
    setTimeout(elecciontijera(valormaquina), 1000);
    imagenmaquina(valormaquina);
});
