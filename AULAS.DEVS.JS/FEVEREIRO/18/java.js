// Formas de declaração de funções
   // function verificar(){ 
   // }

   // let verificar = function(){
   // }

let verificar = ()=>{
    //querySelector = sâo formas de capturar o elemento,
    //seja via classe(.), id(#) ou tag.
    let numero = (window.document.querySelector("id_numero").value);

    let resultado = document.getElementById("id_resultado");
    
    if(numero % 2 == 1){
        resultado.innerHTML = "O número é ímpar.";
    }else{
        resultado.innerHTML = "O número é par.";
    }
}