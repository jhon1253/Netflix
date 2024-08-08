// calculadora.test.js
const { sumar, restar, multiplicar, dividir } = require("./calculadora");

test("suma 4 + 4 para igual 8", () => {
  expect(sumar(4, 4)).toBe(8);
});

test("resta 5 - 3 para igual 2", () => {
  expect(restar(5, 3)).toBe(2);
});

test("multiplica 2 * 3 para igual 6", () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test("divide 6 / 2 para igual 3", () => {
  expect(dividir(6, 2)).toBe(3);
});

test("lanza error al dividir por cero", () => {
  expect(() => dividir(1, 0)).toThrow("No se puede dividir por cero");
});
