// Teclas numericas e operadoras

let teclasNumericas = document.querySelectorAll("button.num");
let teclasOperadoras = document.querySelectorAll("button.ope");
console.log(teclasOperadoras);

teclasOperadoras.forEach((ope) => {
  ope.addEventListener("click", function () {
    if (
      expressaoAtual === "" ||
      expressaoAtual.slice(-1) === "+" ||
      expressaoAtual.slice(-1) === "-" ||
      expressaoAtual.slice(-1) === "*" ||
      expressaoAtual.slice(-1) === "/"
    ) {
      alert("Operador inválido");
      expressaoAtual = expressaoAtual.slice(0, -1);
    }
  });
});

let teclas = [...teclasNumericas, ...teclasOperadoras];

teclas.forEach((botao) => {
  botao.addEventListener("click", teclasExibidas);
});

// Input do resultado exibido

let inputResultado = document.getElementById("resultado");

// variavel que armazena

let expressaoAtual = "";

// tecla de reset com evento de click, que aciona a função
let teclaDeReset = document.querySelector("button.reset");

teclaDeReset.addEventListener("click", limpar);

// tecla de calculo
let teclaDeCalculo = document.querySelector("button.calculo");

teclaDeCalculo.addEventListener("click", calcular);

// tecla apagar
let teclaApagar = document.querySelector("button.apagar");

teclaApagar.addEventListener("click", apagar);

// função de pegar as teclas e o armazenamento tenham valor e sejam exibidos no resultado

function teclasExibidas(tecla) {
  expressaoAtual += tecla.target.innerText;
  inputResultado.value = expressaoAtual;
}

// função de limpar o resultado
function limpar() {
  expressaoAtual = "";
  inputResultado.value = "";
}

// função de calcular o resultado
function calcular() {
  teclaDeCalculo = eval(expressaoAtual);
  inputResultado.value = teclaDeCalculo;
}

// função de apagar o ultimo digito
function apagar() {
  expressaoAtual = expressaoAtual.slice(0, -1);
  inputResultado.value = expressaoAtual;
}
