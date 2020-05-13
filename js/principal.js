//var titulo = document.querySelector("#titulo");
//titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso inválido";
        pesoValido = false;
        pacientes[i].classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3) {
        tdImc.textContent = "Altura inválida";
        alturaValida = false;
        pacientes[i].classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}