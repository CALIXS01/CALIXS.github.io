let verificar = () => {
    let idade = (window.document.getElementById("id_idade").value);
 
    let resultado = document.querySelector("#id_resultado");


if(idade < 18 | idade >= 100){
    resultado.innerHTML = "Inapto para início.";
} else if (idade < 50){
    resultado.innerHTML = "Apto para início. agora você renovará sua habilitação a cada 10 anos.";
} else if (idade >=50 | idade <= 70){
    resultado.innerHTML = "Apto para início. agora você renovará sua habilitação a cada 5 anos.";
} else if (idade >= 70)
    resultado.innerHTML = "Apto para início. agora você renovará sua habilitação a cada 3 anos."
}