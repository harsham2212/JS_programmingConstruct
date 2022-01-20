// Arthmatic Operations

{
  function arithmatic_operation(a, b, c) {
    let Operation1 = a + b * c;
    console.log("a + b * c = " + Operation1);
    let Operation2 = a + b / c;
    console.log("a + b / c = " + Operation2);
    let Operation3 = (a % b) + c;
    console.log("a % b + c = " + Operation3);
    let Operation4 = a * b + c;
    console.log("a * b + c = " + Operation4);

    opArray = [Operation1, Operation2, Operation3, Operation4];
    min = opArray[0];
    max = opArray[0];
    for (array of opArray) {
      if (array < min) min = array;
    }
    for (array of opArray) {
      if (array > max) max = array;
    }
    console.log("maximum number: " + max);
    console.log("minimum number: " + min);
  }

  var readline = require("readline-sync");
  let FirstNum = readline.question("Enter the first number:");
  let secondNum = readline.question("Enter the second number:");
  let thirdNum = readline.question("Enter the third number:");

  arithmatic_operation(
    parseInt(FirstNum),
    parseInt(secondNum),
    parseInt(thirdNum)
  );
}
