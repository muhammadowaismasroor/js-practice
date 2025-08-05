// Practice Question # 08
//For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of their entire class
console.log("Question No. 08 Answer");

let stdMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of stdMarks) {
    sum += val;
}

let avg = sum / stdMarks.length;
console.log(`the average marks of students is ${avg}`);


// Practice Question # 09
// For a given array with a price of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after apply offer.
console.log("Question No. 09 Answer");

let itemPrice = [250, 645, 300, 900, 50];
for (let price of itemPrice) {
    let discount = price * 10 / 100;
    let finalAmount = price - discount;
    console.log(`The amount of item before discount is ${price} and after discount is ${finalAmount}`);
}