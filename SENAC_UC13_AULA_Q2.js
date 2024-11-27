/**
 * Gerencia um estoque.
 *
 * Cria um array estoque com 4 itens iniciais, atualiza o segundo item no array,
 * e exibe o número total de itens no estoque.
 *
 * @returns {void}
 */
function gerenciarEstoque() {
    // Cria um array estoque com 4 itens iniciais
    let estoque = ["Item 1", "Item 2", "Item 3", "Item 4"];

    // Atualiza o segundo item no array
    estoque[1] = "Item 2 Atualizado";

    // Exibe o número total de itens no estoque usando .length
    console.log("Número total de itens no estoque:", estoque.length);
}

// Chama a função para gerenciar o estoque
gerenciarEstoque();
