//console.log("Importarei pacientes");

var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener("click", function(){
    //console.log("Buscando pacientes");
    //Endereço da API: https://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        //console.log(xhr.responseText);
        var resposta = xhr.responseText;
        //console.log(typeof resposta);
        var pacientes = JSON.parse(resposta);
        //console.log(pacientes);
        pacientes.forEach( function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
    });
    xhr.send();
});