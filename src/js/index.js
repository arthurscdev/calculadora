// Teclas

const teclas = document.querySelectorAll("button.num, button.ope");

const teclasDeAcao = document.querySelectorAll("button.acao");

teclas.forEach((botao) => {
  botao.addEventListener("click", teclasExibidas);
});

let expressaoAtual = "";

// função

function teclasExibidas(tecla) {
  console.log(tecla.target.innerText);
  expressaoAtual += tecla.target.innerText;
  console.log("Expressão atual:", expressaoAtual);
  inputResultado.value = expressaoAtual;
}

let inputResultado = document.getElementById("resultado");

console.log(inputResultado);

// Expressão
