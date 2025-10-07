// task:    - Iterate over an array of numbers and print only multiples of 3 or 5.

const array = [9,6,10,5,1,2,3]
let multipliesOfThrees = []
let multipliesOfFives = []

for (let i = 0; i < array.length; i++){
    if (array[i] % 3 === 0){
        multipliesOfThrees.push(array[i])
    } else if (array[i] % 5 === 0){
        multipliesOfFives.push(array[i])
    }
}
console.log(
    "Multipliers of three are " + multipliesOfThrees +
    " Miltipliers of fives are " + multipliesOfFives
)