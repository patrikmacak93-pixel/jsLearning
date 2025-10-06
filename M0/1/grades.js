const points = process.argv[2]

let gradeA = "A"
let gradeB = "B"
let gradeC = "C"
let gradeD = "D"
let gradeF = "F"

if (points >= 90 && points <= 100){
    console.log("Your grade is " + gradeA);
} else if (points >= 80 && points <= 89){
    console.log("Your grade is " + gradeB)
} else if (points >= 70 && points <= 79){
    console.log("Your grade is " + gradeC)
} else if (points >= 60 && points <= 69){
    console.log("Your grade is " + gradeD)
} else {
    console.log("Your grade is " + gradeF)
}