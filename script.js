let playerScore = 0;
let computerScore = 0;

let roundsPlayed = 0;
let totalRounds = 5;

const pHumanChoice = document.querySelector('#pHumanChoice');
const pComputerChoice = document.querySelector('#pComputerChoice');
const pResult = document.querySelector('#pResult');
const pComputerScore = document.querySelector('#pComputerScore');
const pHumanScore = document.querySelector('#pHumanScore');
const pFinalResult = document.querySelector('#pFinalResult');
const newGameButton = document.querySelector('#newGame');

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}


//Compuer chooses a action
function getComputerChoice() {

    let randomInt = Math.random();

    if (randomInt <= 1/3)
        return "Rock";
    else if (randomInt >1/3 && randomInt <= 2/3)
        return "Paper";
    else
        return "Scissors";
}

//Player Chooses a action 

function playRound(humanChoice, getComputerChoice) {
    if (roundsPlayed < totalRounds) {
let computerChoice = getComputerChoice();
const lose = () => {
    computerScore++
    pResult.textContent = "You Lost!";
    pHumanChoice.textContent = "Human chose: " + humanChoice;
    pComputerChoice.textContent = "Computer chose: " + computerChoice;
    pHumanScore.textContent = "Human Score: " + playerScore;
    pComputerScore.textContent = "Computer Score: " + computerScore
}
const win = () => {
    playerScore++
    pResult.textContent = "You Won!";
    pHumanChoice.textContent = "Human chose: " + humanChoice;
    pComputerChoice.textContent = "Computer chose: " + computerChoice;
    pHumanScore.textContent = "Human Score: " + playerScore;
    pComputerScore.textContent = "Computer Score: " + computerScore;
}
const tie = () => {
    pResult.textContent = "You Tied!";
    pHumanChoice.textContent = "Human chose: " + humanChoice;
    pComputerChoice.textContent = "Computer chose: " + computerChoice;
    pHumanScore.textContent = "Human Score: " + playerScore;
    pComputerScore.textContent = "Computer Score: " + computerScore;
}

if (humanChoice == "Rock" && computerChoice == "Paper")
{
    lose();
}
else if (humanChoice == "Paper" && computerChoice == "Rock")
{
    win();
}
else if (humanChoice == "Paper" && computerChoice == "Scissors")
{
        lose();   
}
else if (humanChoice == "Scissors" && computerChoice == "Paper")
 {
            win();
 }  
else if (humanChoice == "Rock" && computerChoice == "Scissors")
{
        win();
}
else if (humanChoice == "Scissors" && computerChoice == "Rock")
{
            lose();
}
else 
{
                tie();
}
roundsPlayed++

if (roundsPlayed === totalRounds) {
    displayFinalResult();
    disableButtons();
    newGameButton.style.display = 'inline'; 
}
}
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {playRound("Rock", getComputerChoice);});
paper.addEventListener('click', () => {playRound("Paper", getComputerChoice);});
scissors.addEventListener('click', () => {playRound("Scissors", getComputerChoice);});

function displayFinalResult(){

    if (computerScore > playerScore)
        pFinalResult.textContent = "Game Over: You lost the game!";
    else if (computerScore < playerScore)
        pFinalResult.textContent = "Game Over: You Won the game!";
    else
        pFinalResult.textContent = "Game Over: You Tied!";
    
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        pHumanChoice.textContent = "";
        pComputerChoice.textContent = "";
        pResult.textContent = "";
        pHumanScore.textContent = "Human Score: 0";
        pComputerScore.textContent = "Computer Score: 0";
        pFinalResult.textContent = "";
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
        newGameButton.style.display = 'none';
    }
    
    newGameButton.addEventListener('click', resetGame);
    