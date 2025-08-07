// Practice Question # 16
//a. Create a h2 heading element with text -"Hello JavaScript". Append "form Apna College students"
//  to this text using JS.

//b. Create 3 div with common class name -"box". Access them & add some unique text to each of them.
console.log("Question No. 16 Answer");
let heading = document.querySelector("h2");
heading.innerText = "Apna College Student";
console.log(heading);


console.log("Question No. 17 Answer");
let divs = document.querySelectorAll("div");

divs[0].innerText = "owais";
divs[1].innerText = "ahmed";
divs[2].innerText = "raziq";
