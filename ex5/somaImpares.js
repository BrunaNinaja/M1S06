function somaImpares(numbers) {
    return numbers.reduce((sum, number) => {
      if (number % 2 !== 0) {
        return sum + number;
      }
      return sum;
    }, 0);
  }
  
  module.exports = somaImpares;
  