var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    var trPaciente = event.target.parentNode;
    trPaciente.classList.add("fadeOut");
    setTimeout(function(){ //espera 500 milissegundos e executa a função
        trPaciente.remove();
    }, 500);

    
/*     var alvoEvento = event.target;
    var paiAlvo = alvoEvento.parentNode;
    
    paiAlvo.remove(); */
});

/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    })
}); */