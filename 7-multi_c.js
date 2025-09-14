const occurrences = parseInt(process.argv[2]);

if (isNaN(occurrences)) {
  console.log("Missing number of occurrences");
} else if (occurrences > 0) {
  for (let i = 0; i < occurrences; i++) {
    console.log("C is fun");
  }
}