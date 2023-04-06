const body = document.querySelector('body');
const mainContainer = document.querySelector('#main-container')
const squareContainer = document.querySelector('#square-container');

mainContainer.appendChild(squareContainer);

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('cell');

    squareContainer.appendChild(square);
}