/* SCOPE EXERCISE, TURN THE CONSOLE TO LOG 4 */
myVar = 4;
console.log(myVar);

function titi() {
  myVar = 3;
  console.log(myVar);
}

titi();

console.log(myVar);

/* OPERATOR EX change to NOK */

let A = "1";

if (A == true) {
  console.log("OK");
} else {
  console.log("nok");
}

/* IF/ELSE/ELSE IF

In the file index.js, write a function named greaterNum that: 
takes 2 arguments, both numbers. 
returns whichever number is the greater (higher) number. 
Call that function 2 times with different number pairs, and log the output 
to make sure it works (e.g. "The greater number of 5 and 10 is 10.").  */

let number1 = 5;
let number2 = 4;

function greatNumber(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

console.log(greatNumber);

let result = greatNumber(number1, number2);
console.log(result);

/* SWITCH 

Using the function in index.js, create a switch with 3 possibilites:
- if the color is blue, return the value "The color is blue" 
- if the color is red, return the value "The color is red" 
- if it's another color, return the value "It's not a color that I know" */

function myFavoriteColor(color) {
  switch (color) {
    case "blue":
      console.log("The color is Blue");
      break;
    case "red":
      console.log("The color is Red");
      break;
    default:
      console.log("It's not a color I know");
  }
}
myFavoriteColor("orange");
