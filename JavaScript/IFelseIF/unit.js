// Digits Place
{
  function displayUnit(num) {
    if (num == 1) console.log("Unit");
    else if (num == 10) console.log("Ten");
    else if (num == 100) console.log("Hundred");
    else if (num == 1000) console.log("Thousand");
    else if (num == 10000) console.log("Ten Thousand");
    else if (num == 100000) console.log("Lakh");
    else if (num == 1000000) console.log("Ten Lakhs");
    else if (num == 10000000) console.log("Crore");
    else if (num == 100000000) console.log("Ten Crores");
    else console.log("Enter correct number");
  }
  var readline = require("readline-sync");
  let num = readline.question("Enter a number like 1,10,100...  : ");
  displayUnit(parseInt(num));
}
