// Practice Question # 11
//Create a function using the "function" keyboard that takes a String as an argument &
//return the number of vowels in the string

console.log("Question No. 11 Answer");

function vowels(string) {
    for (let value of string) {
        if (value == "a" ||
            value == "e" ||
            value == "i" ||
            value == "o" ||
            value == "u") {
            console.log(value);
        }
    }
}
vowels("owais");

// Practice Question # 12
//Perform same take of question 11 but use arrow function

console.log("Question No. 12 Answer");
let arrow = (str) => {
    for (let value of str) {
        if (value == "a" ||
            value == "e" ||
            value == "i" ||
            value == "o" ||
            value == "u") {
            console.log(value);
        }
    }
}
 arrow("ahmed")