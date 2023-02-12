function getComputerChoice(){
    let caseNumber = Math.floor(Math.random()*3 + 1);
    let choice = "none"
    switch (caseNumber){
        case 1 : 
            choice = "rock";
            break;
        case 2 :
            choice = "paper";
            break;
        case 3 :
            choice = "scissors";
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let roundResult = "none";
    if (computerSelection === playerSelection)  roundResult = "Draw, both players chose same";
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") roundResult = "Computer wins, paper beats rock";
        if (computerSelection === "scissors") roundResult = "Player wins, rock beats scissors";
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") roundResult = "Player wins, paper beats rock";
        if (computerSelection === "scissors") roundResult = "Computer wins, scissors beat paper";
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") roundResult = "Computer wins, rock beats scissors";
        if (computerSelection === "paper") roundResult = "Player wins, scissors beat paper";
    }
    console.log(computerSelection);
    return(roundResult);
}

alert(playRound(prompt("rock paper scissors"), getComputerChoice()));;