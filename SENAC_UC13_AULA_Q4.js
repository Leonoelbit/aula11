/**
 * Lê um array de palavras e exibe cada palavra no console em ordem reversa.
 *
 * @param {string[]} palavras - Array de palavras a serem exibidas em ordem reversa.
 *
 * @returns {void}
 */
function exibirPalavrasReverso(palavras) {
    // Usa um loop for reverso para exibir cada palavra no console
    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}

// Chama a função para exibir as palavras em ordem reversa
exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
