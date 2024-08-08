// calculadora.js
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
    // console.error("error no se puede dividir por '")
  }
  return a / b;
}

module.exports = { sumar, restar, multiplicar, dividir };
