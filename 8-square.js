// 8-square.js
// Prints a square of size given by first CLI argument.
// Prints "Missing size" if arg can't be converted to an integer.
// Uses loops and console.log() only. No `var`.

const size = parseInt(process.argv[2], 10);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  if (size <= 0) {
    // size is an integer but non-positive: do nothing (no output)
  } else {
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < size; j++) {
        row += 'X'; // change to 'x' if you need lowercase
      }
      console.log(row);
    }
  }
}
