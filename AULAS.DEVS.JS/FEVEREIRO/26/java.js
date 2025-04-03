document.getElementById('formulario')
.addEventListener("submit", (e)=>{
    e.preventDefault();


let nome = document.querySelector("#id_nome").value;
let resultado = document.querySelector("#resultado");

let altura = document.querySelector("#id_altura").value
altura = parseFloat(altura.replace(",", "."));


let peso = document.querySelector("#id_peso").value
peso = parseFloat(peso.replace(",", "."));

let calculoImc = peso / (altura **2);

resultado.innerHTML = `<br>
Olá, <strong> ${nome}</strong>!
<br> Seu IMC é <strong> ${calculoImc.toFixed(1)}</strong>
e sua classificação é: `;

resultado.innerHTML +=

calculoImc < 18.5 ? "Abaixo do peso normal" :
calculoImc >= 18.5 && calculoImc <= 24.9 ? "Peso normal" :
calculoImc > 24.9 && calculoImc <= 29.9 ? "Excesso de peso" :
calculoImc > 29.9 && calculoImc <= 34.9 ? "Obesidade classe I" :
calculoImc > 34.9 && calculoImc <= 39.9 ? "Obesidade classe II" :
calculoImc > 39.9 ? "Obesidade classe III" : "ERRO";


} )

let limpar_nome = ()=> {
    let nome = document.querySelector("#id_nome");
    nome.value = ""
}