// Practice Question # 13
//for a given array of numbers, print the square of each value using the foreach loop
console.log("Question No. 13 Answer");

let values = [2, 4, 6, 7, 8, 9];

values.forEach((value) => {
    console.log(value * value);
});

// Practice Question # 14
//We are given array of marks of students. Filter our of the students that scored 90+
console.log("Question No. 14 Answer");

let stdMarks = [80, 92, 95, 70, 75, 40];
let Marks = stdMarks.filter((val) => {
    return (val > 90);
});
console.log(Marks);

// Practice Question # 15
//Take a number n as input form user. Create an array of numbers form 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate products of all numbers in the array.

console.log("Question No. 15 Answer");
