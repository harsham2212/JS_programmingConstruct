// Unit Conversion
{
  var readline = require("readline-sync");
  let num = readline.question("Enter a number : ");
  console.log("1. Feet to Inch");
  console.log("2. Feet to Meter");
  console.log("3. Inch to Feet");
  console.log("4. Meter to Feet");
  choice = readline.question("Enter your choice : ");
  switch (choice) {
    case "1":
      let feetInch = num * 12;
      console.log(feetInch);
      break;
    case "2":
      let feetMeter = num / 3.2808;
      console.log(feetMeter);
      break;
    case "3":
      let inchFeet = num / 12;
      console.log(inchFeet);
      break;
    case "4":
      let meterFeet = num * 3.2808;
      console.log(meterFeet);
      break;
    default:
      console.log("Invalid choice");
      break;
  }
}
