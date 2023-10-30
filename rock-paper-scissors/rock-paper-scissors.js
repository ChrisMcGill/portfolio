//rock paper scissors best of 5
let playerChoice = '';
let computerChoice = '';
let resultsAnnounce = '';
let gameResult = '';
let pScore = 0;
let cScore = 0;

//setting div display start values
const humanScore = document.querySelector('#humanScore');
humanScore.textContent = (`Human: ${pScore}`);

const compScore = document.querySelector('#compScore');
compScore.textContent = (`Computer: ${cScore}`);

const tieScore = document.querySelector('#tieScore');
tieScore.textContent = ("")

const declareWinner = document.querySelector('#declareWinner')
declareWinner.textContent = ("Rock Paper Scissors: First to 5 wins")

const resetStyle = document.querySelector('.resetStyle');

// gets computer choice randomly, highlight choice to user
const cRock = document.querySelector('#cRock');
const cPaper = document.querySelector('#cPaper');
const cScissors = document.querySelector('#cScissors');
function getComputerChoice(){
    let jumble;
    jumble = Math.floor(Math.random()*100);
    cRock.style.opacity = ('0.5');
    cRock.style.color = ('#000000');
    cPaper.style.opacity = ('0.5');
    cPaper.style.color = ('#000000');
    cScissors.style.opacity = ('0.5');
    cScissors.style.color = ('#000000');
    if (jumble>=33 && jumble<67){
        cRock.style.opacity = ('1');
        cRock.style.color = ('#fdffb6');
        cRock.style.transform = ('scale(1.2)');
        computerChoice = "rock";
    } else if (jumble<33){
        cPaper.style.opacity = ('1');
        cPaper.style.color = ('#fdffb6');
        cPaper.style.transform = ('scale(1.2)');
        computerChoice = "paper";
    } else {
        cScissors.style.opacity = ('1');
        cScissors.style.color = ('#fdffb6');
        cScissors.style.transform = ('scale(1.2)');
        computerChoice = "scissors";
    };
};

//player choice and initiates game
buttonR.addEventListener('click', () => {
    playerChoice = "rock";
    playGame();
});
buttonP.addEventListener('click', () => {
    playerChoice = "paper";
    playGame();
});
buttonS.addEventListener('click', () => {
    playerChoice = "scissors";
    playGame();
});

//compare input vs computer choice
function compareChoice(){
    if (computerChoice === playerChoice){
        return resultsAnnounce = "It's a TIE!";
    } else if (((computerChoice === "rock") && (playerChoice === "scissors")) || ((computerChoice === "paper") && (playerChoice === "rock")) || ((computerChoice === "scissors") && (playerChoice === "paper"))){
        return resultsAnnounce = "The machine has won again! >:(";
    } else if (((computerChoice === "scissors") && (playerChoice === "rock")) || ((computerChoice === "rock") && (playerChoice === "paper")) || ((computerChoice === "paper") && (playerChoice === "scissors"))){    
        return resultsAnnounce = "You have deaften the machine! :D";
    };    
};

//tally for scores
function resultsCompare(){
        if (resultsAnnounce === "The machine has won again! >:("){
            return cScore++;
        } else if(resultsAnnounce === "You have deaften the machine! :D"){
            return pScore++;
        };
};

// handles and announces ties
function tieIsScore(){
    if (resultsAnnounce === "It's a TIE!"){
        tieScore.textContent = (`${resultsAnnounce}`);
    } else{
        tieScore.textContent = ('');
    };
};

//finish game with final print declaring winner
function finale(){
    if (pScore === 5){
        return gameResult = "V I C T O R Y !";
    } else if (cScore ===5){
        return gameResult = "D E F E A T !";
    } else{
        return gameResult = "Rock Paper Scissors: First to 5 wins";
    };
};

function changeBackground(){
    if (pScore === 5){
        document.body.style.backgroundColor = ('#77dd77');
    } else if (cScore === 5){
        document.body.style.backgroundColor = ('#ffadad');
    } else {
        return;
    }
};

function resetBtn(){
    if ((gameResult === "V I C T O R Y !") || (gameResult === "D E F E A T !")){
    resetStyle.style.backgroundColor = ('#fdffb6');
    resetStyle.style.fontSize = ('large');
    } else { 
        return;
    };
};

//function to run the game
function playGame(){
    if ((pScore === 5) || (cScore === 5)){
        return;
    };
    getComputerChoice();
    compareChoice();
    resultsCompare();
    humanScore.textContent = ((`Human: ${pScore} ${playerChoice}`));
    compScore.textContent = (`Computer: ${cScore} ${computerChoice}`);
    tieIsScore();
    finale();
    declareWinner.textContent = (`${gameResult}`)
    changeBackground();
    resetBtn();
};
