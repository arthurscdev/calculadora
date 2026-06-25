// Teclas numericas e operadoras

const teclas = document.querySelectorAll("button.num, button.ope");

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
console.log(teclaDeCalculo);
teclaDeCalculo.addEventListener("click", calcular);

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

function calcular() {
  teclaDeCalculo = eval(expressaoAtual);
  expressaoAtual = teclaDeCalculo;
  inputResultado.value = teclaDeCalculo;
}
