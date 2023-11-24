
let idioma = document.querySelector("#idioma");

let linguaPortuguesa = document.createElement("script")
linguaPortuguesa.src = ("idiomas/portugues.js");
document.head.appendChild(linguaPortuguesa);

let linguaInglesa = document.createElement("script")
linguaInglesa.src = ("idiomas/english.js");
document.head.appendChild(linguaInglesa);


let linguaFrancesa = document.createElement("script")
linguaFrancesa.setAttribute("src", "./idiomas/francais.js");
document.head.appendChild(linguaFrancesa);


let linguaEspanhola = document.createElement("script")
linguaEspanhola.setAttribute("src", "./idiomas/espanol.js");
document.head.appendChild(linguaEspanhola);


idioma.addEventListener("change", function () {
    translate(this.value);
});

function translate(idioma) {
    let traducao = (idioma == "pt") ? pt() :
        (idioma == "en") ? en() :
            (idioma == "fr") ? fr() :
                (idioma == "es") ? es() :
                    "";
    setLanguage(traducao)
}

function setLanguage(traducao) {
    document.querySelector("#somar").textContent = traducao.soma;
    document.querySelector("#subtrair").textContent = traducao.subtracao;
    document.querySelector("#multiplicar").textContent = traducao.multiplicacao;
    document.querySelector("#divisao").textContent = traducao.divisao;
    document.querySelector("#titulo").innerHTML = traducao.titulo;
    document.querySelector("#boasVindas").innerHTML = traducao.boasVindas;
    document.querySelector("#idiomaSelecionado").innerHTML = traducao.idiomaSelecionado;
}










