let playerScore = 0;
let computerScore = 0;


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
function getHumanChoice() {
   let userAnswer = prompt("Enter Rock, Paper, or Scissors!: ");
   
   while (userAnswer !== "Rock" && userAnswer !== "Paper" && userAnswer !== "Scissors")
        userAnswer = prompt("Incorrect choice, please enter Rock, Paper, or Scissors!: ")

   return userAnswer;
}

function playRound(getHumanChoice, getComputerChoice) {
getComputerChoice();
getHumanChoice();
}

playRound()


