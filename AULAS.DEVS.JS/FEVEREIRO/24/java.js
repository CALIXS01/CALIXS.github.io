let limpar = ()=>{
    // Capturar via ID
    // let jogador = document.getElementById("id_joao_ricardo");
    // console.log(jogador);

    // CAPTURAR via QUERY IN
    // let jogador = document.querySelector("li");
    // console.log(jogador);
    // jogador.innerHTML = "<strong>Adria</strong>";

    //Capturar todos por

//     let jogador = document.querySelectorAll(".jogadores");
//     console.log(jogador.length);
    
// for (let i = 0; i < jogador.length; i++) {
//     jogador[i].innerHTML = "<strong>João Ricardo</strong>";

// }

// let jogador = document.querySelectorAll("li");
// console.log(jogador.length);

// for (let i = 0; i < jogador.length; i++) {
// jogador[i].innerHTML = "<strong>João Ricardo</strong>";

// }

 // Capturar todos os NAMES via QUERY 
 
 let jogadores = document.getElementsByName("juan");
 console.log(jogadores.length);
 console.log(jogadores);

 for (let i = 0; i < jogadores.length; i++){
     jogadores[i].innerHTML = ""
 }


}