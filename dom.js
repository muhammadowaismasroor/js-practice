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

let body = document.querySelector("body");
body.append(btn);

// Practice Question # 18
//Create a <p> tag in html, give it a class and some styling.
//Now create a new class in CSS and try to append this class to the <p> element.
//Did you notice, how you overwrite the class name when you add a new one.
//Solve this problem using classList.
console.log("Question No. 18 Answer (a)");

let para = document.querySelector(".para-q-18");
para.getAttribute("class");
// para.setAttribute("class", "new-class")
para.classList.add("new-class")
console.log(para)



