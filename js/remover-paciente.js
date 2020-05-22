var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.remove();
/*     var alvoEvento = event.target;
    var paiAlvo = alvoEvento.parentNode;
    
    paiAlvo.remove(); */
})

/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    })
}); */