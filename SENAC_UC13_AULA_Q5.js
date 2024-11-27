/**
 * Jogo de adivinhação de números entre 1 e 10.
 *
 * Pede ao usuário para adivinhar um número até que ele acerte ou digite "sair".
 *
 * @returns {void}
 */
function jogoAdivinhacao() {
    const numeroCorreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;

    while (tentativa !== numeroCorreto) {
        tentativa = prompt("Adivinhe um número entre 1 e 10 ou digite 'sair' para encerrar:");

        if (tentativa.toLowerCase() === "sair") {
            console.log("Você saiu do jogo.");
            break;
        }

        tentativa = Number(tentativa);

        if (tentativa === numeroCorreto) {
            console.log("Parabéns! Você acertou o número.");
        } else {
            console.log("Tente novamente.");
        }
    }
}

// Chama a função para iniciar o jogo de adivinhação
jogoAdivinhacao();