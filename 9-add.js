// Function prototype to add two numbers
function add(a, b) {
  return a + b;
}

// Get the two arguments and convert them to integers
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

// Print the result of the addition
console.log(add(arg1, arg2));