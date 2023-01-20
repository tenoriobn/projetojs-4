const jogadorDaVez = document.querySelector(".jogadorDaVez");

let selecionar;
let jogador = "X";

let posicao = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]; 

function inicio() {
    selecionar = [];

    jogadorDaVez.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

    document.querySelectorAll(".game__botao").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", novoMovimento);
    });
}

inicio();

function novoMovimento(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", novoMovimento);
    selecionar[index] = jogador;

    setTimeout(() => {
        verificar();
    },[100]);

    jogador = jogador === "X" ? "O" : "X";

    jogadorDaVez.innerHTML = `JOGADOR DA VEZ: ${jogador}`;
}

function verificar() {
    let ultimaJogada = jogador === "X" ? "O" : "X";

    const items = selecionar
    .map((item, i) => [item, i])
    .filter((item) => item[0] === ultimaJogada)
    .map((item) => item[1]);
        

    for (pos of posicao) {
        if(pos.every((item) => items.includes(item))) {
            alert("O JOGADOR '" + ultimaJogada + "' GANHOU!")
            inicio();
            return;
        }
    }

    if (selecionar.filter((item) => item).length === 9) {
        alert("DEU EMPATE");
        inicio();
        return;
    }
}