// Practice Question # 19
//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again
console.log("Question No. 19 Answer (a)");

let body = document.querySelector("body");
let btn = document.querySelector("#mode");
let mode = true;

btn.addEventListener("click", (e) => {
    if (mode === true) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        mode = false;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        mode = true;
    }
})
