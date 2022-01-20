// Display Week Day
{
    var readline = require("readline-sync");
    let weekDay = readline.question("Enter the number of day between 1 to 7 : ");
switch (weekDay) {
  case "1":
    console.log("Sunday");
    break;
  case "2":
    console.log("Monday");
    break;
  case "3":
    console.log("Tuesday");
    break;
  case "4":
    console.log("Wednesday");
    break;
  case "5":
    console.log("Thursday");
    break;
  case "6":
    console.log("Friday");
    break;
  case "7":
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Input! Please enter the number between 1-7 ");
    break;
}
}
