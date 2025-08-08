// Practice Question # 16
//a. Create a h2 heading element with text -"Hello JavaScript". Append "form Apna College students"
//  to this text using JS.

//b. Create 3 div with common class name -"box". Access them & add some unique text to each of them.
console.log("Question No. 16 Answer (a)");
let heading = document.querySelector("h2");
heading.innerText = heading.innerText + "form Apna College students"
console.log(heading);


console.log("Question No. 16 Answer (b)");
let divs = document.querySelectorAll("div");

divs[0].innerText = "owais";
divs[1].innerText = "ahmed";
divs[2].innerText = "raziq";

// Practice Question # 17
//Create a new button element. Give it a text "click me", background color of red & text color of white.
// a. Insert the button as the first element inside the body tag.
console.log("Question No. 17 Answer (a)");

let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body");
console.log(btn);




