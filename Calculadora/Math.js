let botaoSomar = document.querySelector("#somar");
let botaoSubtrair = document.querySelector("#subtrair");
let botaoMultiplicar = document.querySelector("#multiplicar");
let botaoDividir = document.querySelector("#divisao");
let visor = document.querySelector("#visor");
let operacao = "";

let valorUm = "";
let valorDois = "";

document.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        calcular();
    }
    if (event.key == "1") {
        add(1);
    }
    if (event.key == "2") {
        add(2);
    }
    if (event.key == "3") {
        add(3);
    }
    if (event.key == "4") {
        add(4);
    }
    if (event.key == "5") {
        add(5);
    }
    if (event.key == "6") {
        add(6);
    }
    if (event.key == "7") {
        add(7);
    }
    if (event.key == "8") {
        add(8);
    }
    if (event.key == "9") {
        add(9);
    }
    if (event.key == "0") {
        add(0);
    }
    if (event.key == "+") {
        operacao = "+";
        visor.innerHTML += " + ";
    }
    if (event.key == "-") {
        operacao = "-";
        visor.innerHTML += " - ";
    }
    if (event.key == "*") {
        operacao = "*";
        visor.innerHTML += " x ";
    }
    if (event.key == "/") {
        operacao = "/";
        visor.innerHTML += " / ";
    }
    
});

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

function apagar() {
    
    visor.innerHTML = visor.innerHTML.slice(0, -1);
    if (operacao == "") {
        valorUm = valorUm.slice(0, -1);
    }
    else {
        valorDois = valorDois.slice(0, -1);
    }
}