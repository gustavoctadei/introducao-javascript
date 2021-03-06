//var titulo = document.querySelector("#titulo");
//titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var imc = pacientes[i].querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        imc.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(!alturaValida) {
        imc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        imc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso <= 1000) {
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3) {
        return true;
    }
    else{
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

//Função Nomeada
//titulo.addEventListener("click", mostraMensagem);

//function mostraMensagem() {
//    console.log("Olá, eu fui clicado");
//}

//Função Anônima
//titulo.addEventListener("click", function() {
//    console.log("Olá, eu fui clicado");
//});