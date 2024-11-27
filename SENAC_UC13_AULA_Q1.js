/**
 * Gerencia uma lista de tarefas.
 *
 * Cria um array vazio chamado tarefas, adiciona três tarefas,
 * remove a última tarefa adicionada e exibe o array final no console.
 *
 * @returns {void}
 */
function gerenciarTarefas() {
    // Cria um array vazio chamado tarefas
    let tarefas = [];

    // Adiciona três tarefas usando o método .push()
    tarefas.push("Tarefa 1");
    tarefas.push("Tarefa 2");
    tarefas.push("Tarefa 3");

    // Remove a última tarefa adicionada usando .pop()
    tarefas.pop();

    // Exibe o array final no console
    console.log(tarefas);
}

// Chama a função para gerenciar as tarefas
gerenciarTarefas();