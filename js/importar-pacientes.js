//console.log("Importarei pacientes");

var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener("click", function(){
    //console.log("Buscando pacientes");
    //Endereço da API: https://api-pacientes.herokuapp.com/pacientes

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    });
    xhr.send();
});