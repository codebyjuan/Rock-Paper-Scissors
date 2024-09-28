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
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
lose = () => {computerScore++; alert("You lost!\n Computer Score: " + computerScore + "\nYour score: " + playerScore);}
win = () => {playerScore++; alert("You Won!\n Computer Score: " + computerScore + "\nYour score: " + playerScore);}
tie = () => alert("You Tied!\n Computer Score: " + computerScore + "\nYour score: " + playerScore);

alert("Human chose " + humanChoice)
alert("Computer chose " + computerChoice)
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

playRound(getHumanChoice, getComputerChoice)


