// Resultado
let testInput = document.getElementById("resultado");
console.log(typeof testInput.value);
// Teclas numericas

let teclasNumericas = document.querySelectorAll("button.num");

teclasNumericas.forEach((botao) => {
  botao.addEventListener("click", teclasExibidas);
  function teclasExibidas(numero) {
    console.log(numero.target.innerText);
  }
});

// Teclas Operacionais

let teclasOperacionais = document.querySelectorAll("button.ope");

teclasOperacionais.forEach((element) => {
  element.addEventListener("click", teclasExibidasOpe);
  function teclasExibidasOpe(operadores) {
    console.log(operadores.target.innerText);
  }
});

// função
