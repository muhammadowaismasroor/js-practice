// Practice Question # 05
// Print all even number form 0 to 100.

console.log("Question No. 05 Answer");
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`the value of ${i} is a even number`);
    }
}

// Practice Question # 06
// Create a game where you start with any random game number. Ask the user to 
// keep guessing the game number until the user enters correct value 
console.log("Question No. 06 Answer");

let guessNumber = 20;
let userNumber = prompt("Guess any number");

while (userNumber != guessNumber) {
    userNumber = prompt("guess again...")
}
console.log(`your guessing number ${guessNumber} which is correct`);













