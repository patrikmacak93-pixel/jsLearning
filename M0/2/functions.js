/*
Task: Write a function expression and an arrow function doing the same task.
Own target: CLI calculator compatible with functions and arrow functions
*/

const firstNum = Number(process.argv[2])
const operator = process.argv[3]
const secondNum = Number(process.argv[4])
let result

//Functions:
function calcAdd(a,b) {return (a + b)}
function calcSub(a,b) {return (a - b)}
function calcMulti(a,b) {return (a * b)}
function calcDivide(a,b) {return (a / b)}

//Arrow functions:
let arrowAdd = (a,b) => a + b
let arrowSub = (a,b) => a - b
let arrowMulti = (a,b) => a * b
let arrowDivide = (a,b) => a / b

if (operator === "+"){
    result = arrowAdd(firstNum,secondNum)
} else if (operator === "-"){
    result = arrowSub(firstNum,secondNum)
} else if (operator === "*"){
    result = arrowMulti(firstNum,secondNum)
} else if (operator === "div"){
    result = arrowDivide(firstNum,secondNum)
} else {
    console.log("Wrong operator")
}

console.log(result)