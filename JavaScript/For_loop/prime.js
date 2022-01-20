// Prime Number
{
    var readline = require("readline-sync");
    let number = readline.question("Enter the number : ");
var isPrime = true;
for (let i = 2; i <= number / 2; i++) {
  let temp = number % i;
  if (temp == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) console.log(number + " is a Prime Number");
else console.log(number + " is not a Prime Number");
}