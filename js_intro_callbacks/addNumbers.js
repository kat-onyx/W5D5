const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    // console.log("Hit the base case if block!");
    completionCallback(sum);
  } else if (numsLeft > 0) {
    console.log("NumsLeft: ", numsLeft);
    reader.question("Enter a number: ", function(userInput) {
      const num1 = parseInt(userInput);
      sum += num1;
      console.log("Partial sum: ", sum);
      addNumbers(sum, numsLeft-1, completionCallback);
      // console.log("WE MADE IT OUT PHEW", numsLeft);
    });
  }
  // console.log("ANOTHER NARROW ESCAPE", numsLeft);
}

addNumbers(0, 3, function(sum) {
   console.log(`Total Sum: ${sum}`);
   reader.close();
});
