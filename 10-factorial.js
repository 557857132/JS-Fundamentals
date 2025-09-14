// 10-factorial.js
// Computes factorial of a number recursively.
// Factorial of NaN is defined as 1.

function factorial(n) {
  if (isNaN(n)) {
    return 1; // factorial(NaN) is 1
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const num = parseInt(process.argv[2], 10);
console.log(factorial(num));
