// Digits place
{
    var readline = require("readline-sync");
    let digit = readline.question("Enter a number like 1,10,100...  : ");
switch (digit) {
  case "1":
    console.log("Unit");
    break;
  case "10":
    console.log("Ten");
    break;
  case "100":
    console.log("Hundred");
    break;
  case "1000":
    console.log("Thousand");
    break;
  case "10000":
    console.log("Ten Thousand");
    break;
  case "100000":
    console.log("Lakh");
    break;
  case "1000000":
    console.log("Ten Lakhs");
    break;
  case "10000000":
    console.log("Crore");
    break;
  case "100000000":
    console.log("Ten Crores");
    break;
  default:
    console.log("Invalid Option");
    break;
}
}
