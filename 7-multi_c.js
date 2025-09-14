const arg = process.argv[2];
const occurrences = parseInt(arg); // Attempt to convert the argument to an integer

if (isNaN(occurrences) || occurrences <= 0) {
  console.log("Missing number of occurrences");
} else {
  // Use a loop to print "C is fun" the specified number of times
  for (let i = 0; i < occurrences; i++) {
    console.log("C is fun");
  }
}