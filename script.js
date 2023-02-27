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
    colour = "#fffc67";
}else {
    greeting = "Good evening"
    colour = "#4a88cf";
}
salute.innerHTML = greeting;
somepart.style.backgroundColor = colour;
