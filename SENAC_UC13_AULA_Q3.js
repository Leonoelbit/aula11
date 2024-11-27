/**
 * Calcula e exibe a média das notas de três alunos.
 *
 * @returns {void}
 */
function calcularMediaAlunos() {
    // Cria um array alunos onde cada elemento é um array contendo as notas de um aluno
    let alunos = [
        { nome: "Aluno 1", notas: [8, 7, 9] },
        { nome: "Aluno 2", notas: [6, 5, 8] },
        { nome: "Aluno 3", notas: [9, 8, 10] }
    ];

    // Usa um loop aninhado para calcular a média das notas de cada aluno
    alunos.forEach(aluno => {
        let soma = 0;
        aluno.notas.forEach(nota => {
            soma += nota;
        });
        let media = soma / aluno.notas.length;

        // Exibe o nome de cada aluno e sua respectiva média
        console.log(`${aluno.nome}: Média = ${media.toFixed(2)}`);
    });
}

// Chama a função para calcular e exibir as médias
calcularMediaAlunos();
