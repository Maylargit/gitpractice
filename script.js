let salute = document.querySelector('p');
let somepart = document.querySelector("main");
let hour = new Date().getHours();
let greeting;
let colour;
if (hour<12) {
    greeting = "Good morning";
    colour = "#8aff67";
} else if (hour<17) {
    greeting = "Good afternoon"
    colour = "#9f0ccc";
}else {
    greeting = "Good evening"
    colour = "#cc5f0c";
}
salute.innerHTML = greeting;
somepart.style.backgroundColor = colour;
