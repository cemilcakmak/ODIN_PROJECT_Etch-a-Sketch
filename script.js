const body = document.querySelector('body');
const mainContainer = document.querySelector('#main-container')
const squareContainer = document.querySelector('#square-container');
const button = document.querySelector('#grid-size');

mainContainer.appendChild(squareContainer);
const size = parseInt(squareContainer.getAttribute('size'));

createCells(16);

let isMouseDown = false;
squareContainer.addEventListener('mousedown', function () {
  isMouseDown = true;
});
squareContainer.addEventListener('mouseup', function () {
  isMouseDown = false;
});
squareContainer.addEventListener('mouseover', function (e) {
  if (isMouseDown) {
    handleEvent(e);
  }
});

button.addEventListener('click', () => {
  const size = prompt('Enter a number from 1 to 100');
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.remove();
  });
  createCells(size);
});

function handleEvent(e) {
    let cell = document.querySelector(`[key='${e.target.getAttribute('key')}']`);
    console.log(cell);
    let computedColor = window.getComputedStyle(cell).getPropertyValue('background-color');
    cell.style.backgroundColor = calculate10percentageDarker(computedColor);
}

function calculate10percentageDarker(computedColor) {
    let colorArray = computedColor.match(/\d+/g);
    return `rgb(${colorArray[0] - 26}, ${colorArray[1] - 26}, ${colorArray[2] - 26})`;
}
  
function createCells(size) {
  for (let i = 0; i < size*size; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `calc(100% / ${size})`;
    cell.style.height = `calc(100% / ${size})`;
    cell.setAttribute('key', i);
    squareContainer.appendChild(cell);
  }  
}