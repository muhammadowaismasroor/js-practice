// Practice Question # 03
// Get user to input a number using prompt("Enter a number"). Check if the number is multiple of 5 or not.


console.log("Question No. 03 Answer");
let userNum = prompt("Enter any number");

if (userNum % 5 == 0) {
    console.log(`User Number ${userNum} is Multiple of 5`);
} else {
    console.log(`User Number ${userNum} is not Multiple of 5`);
}

//Practice Questoin # 04
//Write a code which can gives grades to student according to their scores:
//80 - 100, A+
//70 - 79, A
//60 - 69, B
//50 -59, C
//less than 50, Fail

console.log("Question No. 04 Answer");
let stdMarks = prompt("Enter your Marks");

if (stdMarks >= 80) {
    console.log(`student marks is ${stdMarks} and student grade is A+`);
} else if (stdMarks >= 70) {
    console.log(`student marks is ${stdMarks} and student grade is A`);
} else if (stdMarks >= 60) {
    console.log(`student marks is ${stdMarks} and student grade is B`);
} else if (stdMarks >= 50) {
    console.log(`student marks is ${stdMarks} and student grade is C`);
} else {
    console.log(`student marks is ${stdMarks} and student is Fail`);
}

