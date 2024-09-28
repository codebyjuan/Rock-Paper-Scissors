
//Compuer chooses a action
function getComputerChoice() {

    let randomInt = Math.random();

    if (randomInt <= 1/3)
        console.log("Rock");
    else if (randomInt >1/3 && randomInt <= 2/3)
        console.log("Paper");
    else
        console.log("Scissors");
}

//Player Chooses a action 
function getHumanChoice() {
    prompt("Enter Rock, Paper, or Scissors!");
}

getComputerChoice()

