const body = document.querySelector('body');
const mainContainer = document.querySelector('#main-container')
const squareContainer = document.querySelector('#square-container');

mainContainer.appendChild(squareContainer);

for (let i = 0; i < 256; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('key', i);
    squareContainer.appendChild(cell);
}

squareContainer.addEventListener('mouseover', function (e) {
    handleEvent(e);
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