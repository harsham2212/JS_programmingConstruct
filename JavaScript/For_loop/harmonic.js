//  Harmonic Series
{
    var readline = require("readline-sync");
let num = readline.question("Enter the number : ");
let sum = 0;
console.log(" Harmonic Series : ");
for (let i = 1; i <= num; i++) {
  console.log("1/" + i + "+");
  sum += 1 / i;
}
console.log("=" + sum.toFixed(2));
}