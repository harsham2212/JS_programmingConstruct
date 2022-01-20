// Day and Month
{
  var readline = require("readline-sync");
  console.log("Select Date between March 20 and June 20-");
  var date = readline.question("Enter date in numbers:");
  var month = readline.question("Enter month in word:s");
  if (month == "march" && date >= 20 && date < 31) console.log("True");
  else if (month == "april" && date < 30) console.log("True");
  else if (month == "may" && date < 31) console.log("True");
  else if (month == "june" && date < 20) console.log("True");
  else {
    console.log("False");
  }
}
