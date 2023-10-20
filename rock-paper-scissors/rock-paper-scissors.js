//rock paper scissors best of 5
let playerChoice;
let computerChoice;
let resultsAnnounce;
let gameResult;
let pScore = 0;
let cScore = 0;

// gets computer choice randomly
function getComputerChoice(){
    let jumble;
    jumble = Math.floor(Math.random()*100);
    if (jumble>=33 && jumble<67){
        return computerChoice = "rock";
    } else if (jumble<33){
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    };
};

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

//finish game with final print declaring winner
function finale(){
    if (pScore === 5){
        return gameResult = "V I C T O R Y !";
    } else if (cScore ===5){
        return gameResult = "D E F E A T !";
    } else{
        return gameResult = "First to 5 wins";
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

//function to run whole game
function playGame(){
    getComputerChoice();
    compareChoice();
    resultsCompare();
    //need to breaklines so display underneath, maybe flex affecting?
    humanScore.textContent = ((`Human: ${pScore}`) + '\n' + (`${playerChoice}`));
    compScore.textContent = (`Computer: ${cScore}`) + "\n" + (`${computerChoice}`);
    tieIsScore();
    finale();
    declareWinner.textContent = (`${gameResult}`)
    //could finish game here with function - game still runs on click
};

// buttons for setting choice and runnning function
buttonR.addEventListener('mousedown', () => {
    return playerChoice = "rock";
});
buttonP.addEventListener('mousedown', () => {
    return playerChoice = "paper";
});
buttonS.addEventListener('mousedown', () => {
    return playerChoice = "scissors";
});

//run function as won't work after return
buttonR.addEventListener('mouseup', () => {
    playGame();
});
buttonP.addEventListener('mouseup', () => {
    playGame();
});
buttonS.addEventListener('mouseup', () => {
    playGame();
});

//setting div display start values
const humanScore = document.querySelector('#humanScore');
humanScore.textContent = (`Human: ${pScore}`);

const compScore = document.querySelector('#compScore');
compScore.textContent = (`Computer: ${cScore}`);

const tieScore = document.querySelector('#tieScore');
tieScore.textContent = ("")

const declareWinner = document.querySelector('#declareWinner')
declareWinner.textContent = ("First to 5 wins")