// JavaScript to be added
function toClick() {
var button = document.getElementById('button-yellow');
button.addEventListener('click',userPrompt);
};

toClick();

function userPrompt() {
  prompt("please key in your email");
};
