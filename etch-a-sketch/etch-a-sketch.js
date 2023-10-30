let gridSize = 0;
let sketchColour = "rgb(0, 0 ,0)";
let sketchR = 0;
let sketchG = 0;
let sketchB = 0;

//set the number that can be used as an RGB value
function makeSketchpad(gridSize){
    let sketchpad = document.querySelector('#sketchpad');
    let cells = document.querySelectorAll('.gridDiv');
    cells.forEach((div) => div.remove());
    sketchpad.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for(let i = 0; i<(gridSize * gridSize); i++){
        let cell = document.createElement("div");
        cell.className = 'gridDiv';
        cell.addEventListener("mouseover", draw);
        cell.style.backgroundColor = "rgb(222, 222, 222)";
        sketchpad.insertAdjacentElement("beforeend", cell);
    };
};

//workaround as previous method broke
function setRandom(){
    sketchColour = 'random';
};
function draw(){
    if ((sketchColour === 'random')){
        this.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    } else {
        this.style.backgroundColor = sketchColour;
    };
};

//pixel display (grid h * grid w)
const resolution = document.querySelector('#resolution');
const resInput = document.querySelector('#resInput');
resolution.textContent = `Pixels: ${((resInput.value)*(resInput.value))}`;
resInput.addEventListener("input", (event) => {
    resolution.textContent = `Pixels: ${((resInput.value)*(resInput.value))}`;
});

function changeColour(){
    sketchColour = `rgb(${sketchR},${sketchG},${sketchB})`;;
};

function resetPad(){
    let cells = document.querySelectorAll('.gridDiv');
    cells.forEach((div) => div.style.backgroundColor = "rgb(222, 222, 222)");
};

//rgb slider functions
function setR(){
    let getR = document.querySelector('#inputR');
    sketchR = getR.value;
    colourShow();
};
function setG(){
    let getG = document.querySelector('#inputG');
    sketchG = getG.value;
    colourShow();
};
function setB(){
    let getB = document.querySelector('#inputB');
    sketchB = getB.value;
    colourShow();
};
function colourShow(){
    const colourShow = document.querySelector('#colourBtn');
    colourShow.style.backgroundColor = `rgb(${sketchR},${sketchG},${sketchB})`;
};

makeSketchpad(16);