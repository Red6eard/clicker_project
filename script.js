let heading = document.getElementById("heading");
let body = document.getElementById("body");
let buttonHi = document.getElementById("buttonHi");
let buttonLow = document.getElementById("buttonLow");
let input = document.getElementById("input");
let counter = 0; 
function getInteractive() {
  heading.innerHTML = "CLICKED " + counter + " times."
  if(counter % input.value == 0) {
  body.style.background = "red"
  } else {
  body.style.background = "none"
  }
}
function clickButtonHi(btn){
  counter ++;
  getInteractive()
};
function clickButtonLow(btn){
  counter --;
  getInteractive()
}
