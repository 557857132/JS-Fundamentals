const firstArg = process.argv[2];

// Check if the argument exists and if it's a valid integer
if (firstArg === undefined) {
  console.log("No argument");
} else {
  const parsedInt = parseInt(firstArg); // Attempt to convert to an integer

  if (isNaN(parsedInt)) {
    console.log("Not a number");
  } else {
    console.log(`My number: ${parsedInt}`);
  }
}