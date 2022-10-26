// Selecting body.
const hexColorEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let body = document.body;
let clickBtn = document.getElementsByClassName("btn")[0];
const h2El = document.querySelector("h2");


clickBtn.addEventListener('click', ()=>{
let color = '#';
 color+=Math.random().toString(16).slice(2,8).toUpperCase();

 body.style.backgroundColor = color;
 
 h2El.innerText = color;

 
});

