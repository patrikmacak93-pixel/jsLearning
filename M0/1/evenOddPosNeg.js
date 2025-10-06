const checkNumber = process.argv[2];
console.log(checkNumber);
let posNeg = 0;
let evenOdd = 0;

if (checkNumber > 0) {
  posNeg = "Number is positive";
} else {
  posNeg = "Numebr is negative";
}

if (checkNumber % 2 === 0) {
  evenOdd = "Number is even";
} else {
  evenOdd = "Numebr is even";
}

console.log(posNeg + " & " + evenOdd);
