const readline = require('readline');
const filtrarPares = require('./filtrarPares');
const somaImpares = require('./somaImpares');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um array de números separados por espaço: ', input => {
  const numbers = input.split(' ').map(Number);

  const numerosPares = filtrarPares(numbers);
  const totalSomaImpares = somaImpares(numbers);

  console.log('Números pares:', numerosPares);
  console.log('Soma dos números ímpares:', totalSomaImpares);

  rl.close();
});