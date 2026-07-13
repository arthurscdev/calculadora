// váriaves

let teclasNumericas = document.querySelectorAll("button.num");

let teclasOperadoras = document.querySelectorAll("button.ope");

let teclasSuportes = document.querySelector("button.dec");

let operadores = ["+", "-", "*", "/"];

let suportes = ".";

let inputResultado = document.getElementById("resultado");

let expressaoAtual = "";

let teclaDeReset = document.querySelector("button.reset");

let teclaDeCalculo = document.querySelector("button.calculo");

let teclaApagar = document.querySelector("button.apagar");

// eventos

teclasNumericas.forEach((num) =>
  num.addEventListener("click", teclasNumericasClicadas),
);

teclasOperadoras.forEach((ope) =>
  ope.addEventListener("click", teclasOperadorasClicadas),
);

teclasSuportes.addEventListener("click", teclasSuportesClicadas);

teclaDeReset.addEventListener("click", limpar);

teclaDeCalculo.addEventListener("click", calcular);

teclaApagar.addEventListener("click", apagar);

// funções

function teclasNumericasClicadas(event) {
  expressaoAtual += event.target.innerText;
  inputResultado.value = expressaoAtual;
}

function teclasOperadorasClicadas(event) {
  if (expressaoAtual == "") {
    return;
  }

  verificarSeEOperado();

  expressaoAtual += event.target.innerText;
  inputResultado.value = expressaoAtual;
}

function verificarSeEOperado() {
  if (operadores.includes(expressaoAtual.slice(-1))) {
    expressaoAtual = expressaoAtual.slice(0, -1);
  }
}

function teclasSuportesClicadas() {
  if (expressaoAtual == "" || operadores.includes(expressaoAtual.slice(-1))) {
    expressaoAtual += "0.";
    inputResultado.value = expressaoAtual;
    return;
  }

  if (temDecimal()) {
    return;
  }
  expressaoAtual += suportes;
  inputResultado.value = expressaoAtual;
}

function temDecimal() {
  let maiorIndice = -1;

  operadores.forEach((i) => {
    let indiceAtual = expressaoAtual.lastIndexOf(i);
    if (indiceAtual > maiorIndice) {
      maiorIndice = indiceAtual;
    }
  });

  let numeroAtual = expressaoAtual.slice(maiorIndice + 1);
  return numeroAtual.includes(suportes);
}

function limpar() {
  expressaoAtual = "";
  inputResultado.value = "";
}

function calcular() {
  if (operadores.includes(expressaoAtual.slice(-1))) {
    return;
  }
  teclaDeCalculo = eval(expressaoAtual);
  inputResultado.value = teclaDeCalculo;
}

function apagar() {
  expressaoAtual = expressaoAtual.slice(0, -1);
  inputResultado.value = expressaoAtual;
}
