let option = document.querySelector("#opcoes").value;
let input = document.querySelector("#tarefa").value;
let carrinho = document.querySelector("#carrinho");
let botao = document.querySelector("#add");

function add(opcao, tarefa) {
    carrinho.innerHTML += `<li>${opcao} - ${tarefa}</li>`;
}

botao.addEventListener("click", function () {
    add(option, input);
})

