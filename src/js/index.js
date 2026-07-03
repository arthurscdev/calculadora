// váriaves

let teclasNumericas = document.querySelectorAll("button.num");

let teclasOperadoras = document.querySelectorAll("button.ope");

let operadores = ["+", "-", "*", "/"];

let inputResultado = document.getElementById("resultado");

let expressaoAtual = "";

let teclaDeReset = document.querySelector("button.reset");

let teclaDeCalculo = document.querySelector("button.calculo");

let teclaApagar = document.querySelector("button.apagar");

// eventos

teclasOperadoras.forEach((ope) =>
  ope.addEventListener("click", teclasOperadorasClicadas),
);

teclasNumericas.forEach((num) =>
  num.addEventListener("click", teclasNumericasClicadas),
);

teclaDeReset.addEventListener("click", limpar);

teclaDeCalculo.addEventListener("click", calcular);

teclaApagar.addEventListener("click", apagar);

// funções

function teclasNumericasClicadas(event) {
  expressaoAtual += event.target.innerText;
  inputResultado.value = expressaoAtual;
}

function teclasOperadorasClicadas(event) {
  verificarSeEOperado();
  expressaoAtual += event.target.innerText;
  inputResultado.value = expressaoAtual;
}

function verificarSeEOperado() {
  if (operadores.includes(expressaoAtual.slice(-1))) {
    expressaoAtual = expressaoAtual.slice(0, -1);
  }
}

function limpar() {
  expressaoAtual = "";
  inputResultado.value = "";
}

function calcular() {
  teclaDeCalculo = eval(expressaoAtual);
  inputResultado.value = teclaDeCalculo;
}

function apagar() {
  expressaoAtual = expressaoAtual.slice(0, -1);
  inputResultado.value = expressaoAtual;
}
