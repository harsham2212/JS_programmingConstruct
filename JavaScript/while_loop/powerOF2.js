//Take a command-line argument n and print a table of powers of 2 that are less than or equal to 2^n till 256 is reached
{
  var readline = require("readline-sync");

  let number = readline.question("Enter a number:");

  let index = 0;

  while (index <= number && Math.pow(2, index) <= 256) {
    console.log(`2 * ${index} = ${Math.pow(2, index)}`);
    index++;
  }
}
