// Practice Question # 08
//For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of their entire class
console.log("Question No. 08 Answer");

let stdMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let stdMark of stdMarks) {
    stdMark += sum;
}
console.log(sum)