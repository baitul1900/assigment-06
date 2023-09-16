const app = require("./app");
const port = 8080;

app.listen(port, () => {
  console.log(``);
});

const celciusToFahrenheit = (input) => {
  const fahrenheit = input * (9 / 5) + 32;
  //   const y = Math.round(fahrenheit * 100) / 100;
  return fahrenheit;
};

console.log(celciusToFahrenheit(55.125478962));

const arr = [1, 2, 2, 3, 1, 45];
const [a, b] = arr;

console.log(a);

// find the square of a number

const square = (sqt) => {
  const sq = Math.pow(sqt, 2);
  return sq;
};

console.log(square(12));

// find the value of x here

// function factorial(n) {
//   let answer = 1;
//   if (n == 0 || n == 1) {
//     return answer;
//   } else if (n > 1) {
//     for (let i = n; (i) => 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   } else {
//     return "number has to be positive";
//   }
// }

// let n = 4;
// answer = factorial(n);
// console.log(`Factorial of " + ${n} + " : " + ${answer}`);

function factorial(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    return "number has to be positive.";
  }
}
let c = 6;
answer = factorial(c);
console.log("Factorial of " + c + " : " + answer);

// new here
function secondFactorial(theFoctorialNumber) {
  let answer = 1;
  if (theFoctorialNumber == 0 || theFoctorialNumber == 1) {
    return answer;
  } else if (theFoctorialNumber > 1) {
    for (let i = theFoctorialNumber; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  } else {
    return "number has to be positive";
  }
}

let theNumber = 8;
answer = secondFactorial(theNumber);
console.log("Factorial of " + theNumber + " : " + answer);
