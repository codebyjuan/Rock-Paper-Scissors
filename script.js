let playerScore = 0;
let computerScore = 0;

const pHumanChoice = document.querySelector('#pHumanChoice');
const pComputerChoice = document.querySelector('#pComputerChoice');
const pResult = document.querySelector('#pResult');
const pComputerScore = document.querySelector('#pComputerScore');
const pHumanScore = document.querySelector('#pHumanScore');
const pFinalResult = document.querySelector('#pFinalResult');


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
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {playRound("Rock", getComputerChoice);});
paper.addEventListener('click', () => {playRound("Paper", getComputerChoice);});
scissors.addEventListener('click', () => {playRound("Scissors", getComputerChoice);});
/*function playGame(){
for (let i = 0; i < 5; i++) {
     playRound(getHumanChoice, getComputerChoice);
}

if (computerScore > playerScore)
    alert("You lost!\nYou: " + playerScore + "\nComputer: " + computerScore);
else if (computerScore < playerScore)
    alert("You won!\nYou: " + playerScore + "\nComputer: " + computerScore);
else
    alert("You tied!\nYou: " + playerScore + "\nComputer: " + computerScore);

}

playGame() */



