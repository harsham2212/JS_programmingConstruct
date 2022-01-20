// Factorials;
{
  var readline = require("readline-sync");
  let Num = readline.question("Enter the number : ");
  let fact = 1;
  for (let i = 1; i <= Num; i++) {
    fact *= i;
  }
  console.log("The factorial of " + Num + " is : " + fact);
}
