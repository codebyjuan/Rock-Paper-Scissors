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
   let userAnswer = prompt("Enter Rock, Paper, or Scissors!: ").toLowerCase(); 
   
   while (userAnswer !== "rock" && userAnswer !== "paper" && userAnswer !== "scissors")
        userAnswer = prompt("Incorrect choice, please enter Rock, Paper, or Scissors!: ").toLowerCase(); 

   return userAnswer.charAt(0).toUpperCase() + userAnswer.slice(1);
}

function playRound(getHumanChoice, getComputerChoice) {
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
lose = () => {computerScore++; alert("Human chose " + humanChoice + "\nComputer chose " + computerChoice + "\nYou lost!\nComputer Score: " + computerScore + "\nYour score: " + playerScore);}
win = () => {playerScore++; alert("Human chose " + humanChoice + "\nComputer chose " + computerChoice + "\nYou Won!\nComputer Score: " + computerScore + "\nYour score: " + playerScore);}
tie = () => alert("Human chose " + humanChoice + "\nComputer chose " + computerChoice +"\nYou Tied!\nComputer Score: " + computerScore + "\nYour score: " + playerScore);


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
else if (humanChoice == "Rock" && computerChoice == "Rock")
{
                tie();
}
else if (humanChoice == "Paper" && computerChoice == "Paper")
{
                    tie();
}
else if (humanChoice == "Scissors" && computerChoice == "Scissors")
    {
                        tie();
    }


}

function playGame(){
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

playGame()


