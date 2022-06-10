const tarefaForm   = document.getElementById("tarefaForm");
const listaTarefas = document.getElementById("listaTarefas");

//Obtém o texto da textbox e envia para a função de adicionar tarefa
tarefaForm.onsubmit = function(e)
{
    e.preventDefault();
    const tarefaTextbox = document.getElementById("tarefaTextbox");
    adicionarTarefa(tarefaTextbox.value);
    tarefaForm.reset();
}

function adicionarTarefa(descricao)
{
    //Cria os elementos HTML necessários para a tarefa
    const tarefaContainer = document.createElement ("div");
    const novaTarefa      = document.createElement ("input");
    const tarefaLabel     = document.createElement ("label");
    const descricaoTarefa = document.createTextNode(descricao);

    //Ajusta os atributos da checkbox
    novaTarefa.setAttribute("type", "checkbox");
    novaTarefa.setAttribute("name", descricao);
    novaTarefa.setAttribute("id", descricao);

    //Label para a checkbox
    tarefaLabel.setAttribute("for", descricao);
    tarefaLabel.appendChild (descricaoTarefa);
    
    //Declara a classe do container para ser afetado pelo css
    tarefaContainer.classList.add("tarefa");
    tarefaContainer.appendChild  (novaTarefa);
    tarefaContainer.appendChild  (tarefaLabel);

    //Insere tudo na lista do HTML
    listaTarefas.appendChild(tarefaContainer);
}