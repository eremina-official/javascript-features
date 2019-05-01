console.log('----- toggleClass utility -----');

const targetDiv = document.querySelector('.target-div');
const toggleButton = document.querySelector('.toggle-button');

if (toggleButton) {
  toggleButton.addEventListener('click', toggleBackgroundColor);
}

function toggleBackgroundColor() {
  toggleClass(targetDiv, 'background-red');
}

function toggleClass (nodeName, className) {
  nodeName.classList.toggle(className);
}


console.log('----- working with jsdom -----');

/* 
  const text should be declared inside the changeText() function 
  for the unit test to work. If the const text is declared outside 
  the function jest throws a TypeError: Cannot set property 
  'textContent' of null.
*/
function changeText() {
  const text = document.querySelector('.text');
  text.textContent = 'text';
}


export { toggleClass, changeText };