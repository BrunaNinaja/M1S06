function somaArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
module.exports = somaArray;