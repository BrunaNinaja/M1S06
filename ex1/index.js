const readline = require('readline');
const somaArray = require('./somaArray');
const multiplicaArray = require('./multiplicaArray');
const calculaMedia = require('./calculaMedia');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira um array de números separados por espaço: ', input => {
    const numbers = input.split(' ').map(Number);

    const sum = somaArray(numbers);
    const multiplication = multiplicaArray(numbers);
    const average = calculaMedia(numbers);

    console.log(`Soma: ${sum}`);
    console.log(`Multiplicação: ${multiplication}`);
    console.log(`Média: ${average}`);

    rl.close();
});