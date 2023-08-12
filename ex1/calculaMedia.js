function calculaMedia(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const soma = arr.reduce((acc, curr) => acc + curr, 0);
    return soma / arr.length;
}

module.exports = calculaMedia;