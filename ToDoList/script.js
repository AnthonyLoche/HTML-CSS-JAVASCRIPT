let option = document.querySelector("#opcoes");
let input = document.querySelector("#tarefa");
let carrinho = document.querySelector("#carrinho");
let botao = document.querySelector("#add");
let tarefas = 0;
let lista = document.querySelector("#lista");
let finalizadas = document.querySelector("#finalizadas");

option.addEventListener("change", function () {
    option = document.querySelector("#opcoes");
})

input.addEventListener("change", function () {
    input = document.querySelector("#tarefa");
})



function add(opcao, tarefa) {

    if (input.value == "") {
        document.getElementById("erro").style.animation = "erro 1.5s";
        setTimeout(function () {
            document.getElementById("erro").style.animation = "none";
        }, 1500);
    }
    else {

        lista.innerHTML += `<li class="item" id=${tarefas}>${opcao.value} - ${tarefa.value}
    <button class="remover" onclick="remover(${tarefas})">🗑️</button>  
    <button class="feitas" onclick="feitas(${tarefas})">Feita</button>  
    </li> `;
        tarefas++;
    }
}

botao.addEventListener("click", function () {
    add(option, input);
})

document.getElementById("limpar").addEventListener("click", function () {
    carrinho.innerHTML = "<h2>Lista de Compras</h2>";
})

function remover(posicao) {
    tarefas--;
    lista.removeChild(document.getElementById(posicao));
}

function feitas() {
     finalizadas.innerHTML += `<li class="item" id=${tarefas}>${option.value} - ${input.value}`
}