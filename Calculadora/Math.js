let botaoSomar = document.querySelector("#somar");
let botaoSubtrair = document.querySelector("#subtrair");
let botaoMultiplicar = document.querySelector("#multiplicar");
let botaoDividir = document.querySelector("#divisao");
let visor = document.querySelector("#visor");
let operacao = "";

let valorUm = "";
let valorDois = "";

botaoSomar.addEventListener("click", function () {
    operacao = "+";
    visor.value += " + ";
});

botaoSubtrair.addEventListener("click", function () {
    operacao = "-";
    visor.value += " - ";
});

botaoMultiplicar.addEventListener("click", function () {
    operacao = "*";
    visor.value += " x ";
})

botaoDividir.addEventListener("click", function () {
    operacao = "/";
    visor.value += " / ";
});

function add(numero) {

    if (operacao === "") {
        valorUm += numero;
        visor.value += numero;
    }

    else if (operacao === "+" || operacao == "-" || operacao == "*" || operacao == "/") {
        valorDois += numero;
        visor.value += numero;
    }
}

let resultado = 0;

function calcular() {
    valorUm = Number(valorUm);
    valorDois = Number(valorDois);
    if (valorDois == "0" || valorUm == "0" || valorDois == 0 || valorUm == 0) {
        visor.value = "ERRO";
    }
    else if (operacao == "+") {
        resultado += Number(valorUm) + Number(valorDois);
        visor.value = resultado;
    }
    else if (operacao == "-") {
        resultado += Number(valorUm) - Number(valorDois);
        visor.value = resultado;
    }
    else if (operacao == "*") {
        resultado += Number(valorUm) * Number(valorDois);
        visor.value = resultado;
    }
    else if (operacao == "/") {
        resultado += Number(valorUm) / Number(valorDois);
        visor.value = resultado;
    }
}

document.querySelector("#igual").addEventListener("click", calcular);

document.querySelector("#limpar").addEventListener("click", function () {
    visor.value = "";
    valorUm = "";
    valorDois = "";
    operacao = "";
    resultado = 0;
});
