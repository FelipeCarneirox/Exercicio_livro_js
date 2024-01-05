// const prompt = require("prompt-sync")();
// const num1 = Number(prompt("1º Número: "));
// const num2 = Number(prompt("2º Número: "));
// const soma = num1 + num2;
// console.log(`Soma é: ${soma}`);

const prompt = require("prompt-sync")();
const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço: "));
const entrada = preco * 0.50;
const parcela = (preco * 0.50) / 12;
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$: ${parcela.toFixed(2)}`);