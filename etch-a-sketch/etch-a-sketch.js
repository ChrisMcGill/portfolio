
let gridSize = 16;
let sketchColour = "rgb(0, 0 ,0)";
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

function changeSize(input) {
    if ((input >=1) && (input <= 100)) { 
        makeSketchpad(input);
    } else { 
        alert("Please select a value between 1 and 100");
    };
};
//alert not working

function draw(){
    if ((sketchColour === 'random')){
        this.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    } else {
        this.style.backgroundColor = sketchColour;
    };
};
//wont change back to original colour

//pixel display (grid h * grid w)
const resolution = document.querySelector('#resolution');
const resInput = document.querySelector('#resInput');
resolution.textContent = `Pixels: ${((resInput.value)*(resInput.value))}`;
resInput.addEventListener("input", (event) => {
    resolution.textContent = `Pixels: ${((resInput.value)*(resInput.value))}`;
});

function changeColour(choice){
    sketchColour = choice;
};

function resetPad(){
    let cells = document.querySelectorAll('.gridDiv');
    cells.forEach((div) => div.style.backgroundColor = "rgb(222, 222, 222)");
};

makeSketchpad(16);
