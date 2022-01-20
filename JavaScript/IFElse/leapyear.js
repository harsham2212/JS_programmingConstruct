// Leap Year
{
  var readline = require("readline-sync");
  var year = readline.question("Enter a year:\n");
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0))
    console.log("It is a leap year");
  else console.log("It is not a leap year");
}
