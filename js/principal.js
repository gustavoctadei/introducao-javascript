//var titulo = document.querySelector("#titulo");
//titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var imc = pacientes[i].querySelector(".info-imc").textContent;

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000) {
        imc = "Peso inválido";
        pesoValido = false;
        pacientes[i].classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3) {
        imc = "Altura inválida";
        alturaValida = false;
        pacientes[i].classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var valorImc = peso / (altura * altura);
        imc = valorImc.toFixed(2);
    }
}