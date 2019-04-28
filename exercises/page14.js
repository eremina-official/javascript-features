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

export { toggleClass };