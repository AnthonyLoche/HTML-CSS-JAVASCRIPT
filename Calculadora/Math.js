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
    visor.innerHTML += " + ";
});

botaoSubtrair.addEventListener("click", function () {
    operacao = "-";
    visor.innerHTML += " - ";
});

botaoMultiplicar.addEventListener("click", function () {
    operacao = "*";
    visor.innerHTML += " x ";
})

botaoDividir.addEventListener("click", function () {
    operacao = "/";
    visor.innerHTML += " / ";
});

function add(numero) {

    if (resultado == 0) {

        if (operacao === "") {
            valorUm += numero;
            visor.innerHTML += numero;
        }

        else if (operacao === "+" || operacao == "-" || operacao == "*" || operacao == "/") {
            valorDois += numero;
            visor.innerHTML += numero;
        }
    }
    else {
        valorUm = resultado;
        valorDois = numero;
        visor.innerHTML = `${valorUm} ${operacao} ${valorDois}`;
    }
}

let resultado = 0;

function calcular() {
    valorUm = Number(valorUm);
    valorDois = Number(valorDois);
    if (valorDois == "0" || valorUm == "0" || valorDois == 0 || valorUm == 0) {
        visor.innerHTML = "ERRO";
    }
    else if (operacao == "+") {
        resultado = Number(valorUm) + Number(valorDois);
        visor.innerHTML = resultado + "<br> <br> <br>" + `${valorUm} + ${valorDois}`;
    }
    else if (operacao == "-") {
        resultado = Number(valorUm) - Number(valorDois);
        visor.innerHTML = resultado + "<br> <br> <br>" + `${valorUm} - ${valorDois}`;
    }
    else if (operacao == "*") {
        resultado = Number(valorUm) * Number(valorDois);
        visor.innerHTML = resultado + "<br> <br> <br>" + `${valorUm} x ${valorDois}`;
    }
    else if (operacao == "/") {
        resultado = Number(valorUm) / Number(valorDois);
        visor.innerHTML = resultado + "<br> <br> <br>" + `${valorUm} / ${valorDois}`;
    }
}

document.querySelector("#igual").addEventListener("click", calcular);

document.querySelector("#limpar").addEventListener("click", function () {
    visor.innerHTML = "";
    valorUm = "";
    valorDois = "";
    operacao = "";
    resultado = 0;
});
