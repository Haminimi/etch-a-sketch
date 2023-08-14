const grid = document.getElementById('grid');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const colorBtn = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const gridSize = document.getElementById('grid-size');
const sliderInput = document.getElementById('slider-input');
const colorPicker = document.getElementById('color-picker');
const header = document.getElementById('header');
let currentMode = 'color';
let currentColor = '#3D405B';
let currentSize = 16;

rainbowBtn.addEventListener('click', () => setCurrentMode('rainbow'));  
rainbowBtn.addEventListener('click', () => handleButtonClick(rainbowBtn));
colorBtn.addEventListener('click', () => setCurrentMode('color'));
colorBtn.addEventListener('click', () => handleButtonClick(colorBtn));
eraserBtn.addEventListener('click', () => setCurrentMode('eraser'));
eraserBtn.addEventListener('click', () => handleButtonClick(eraserBtn));
clearBtn.addEventListener('click', () => reloadGrid()); 
sliderInput.addEventListener('change', (e) => changeGridSize(e.target.value));
sliderInput.addEventListener('mousemove', (e) => changeSizeValue(e.target.value));
colorPicker.addEventListener('input', (e) => setCurrentColor(e.target.value));

function handleButtonClick(clickedBtn) {
    [rainbowBtn, eraserBtn, colorBtn].forEach(btn => {
    btn.classList.toggle('active', btn === clickedBtn);
    });
}

clearBtn.addEventListener('mousedown', () => clearBtn.classList.add('active'));
clearBtn.addEventListener('mouseup', () => clearBtn.classList.remove('active'));
clearBtn.addEventListener('mouseleave', () => clearBtn.classList.remove('active'));

function changeGridSize(value) {
    setCurrentSize(value)
    changeSizeValue(value)
    reloadGrid()
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function changeSizeValue(value) {
    gridSize.innerHTML = `${value} x ${value}`;
}

function reloadGrid() {
    clearGrid()
    setUpGrid(currentSize)
}

function clearGrid() {
    grid.innerHTML = '';
}

function setUpGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('click', changeColor)
        grid.appendChild(gridElement)
    }
}

function setCurrentMode(newMode) {
    currentMode = newMode
}