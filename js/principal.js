//var titulo = document.querySelector("#titulo");
//titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var imc = pacientes[i].querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000) {
        imc.textContent = "Peso inválido";
        pesoValido = false;
        pacientes[i].classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3) {
        imc.textContent = "Altura inválida";
        alturaValida = false;
        pacientes[i].classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var valorImc = peso / (altura * altura);
        imc.textContent = valorImc.toFixed(2);
    }
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

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.peso.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});