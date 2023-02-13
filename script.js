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
    let roundData;
    if (computerSelection === playerSelection)  roundData = ["Draw, both players chose same", "draw"];
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") roundData = ["Computer wins, paper beats rock", "computer"];
        if (computerSelection === "scissors") roundData = ["Player wins, rock beats scissors", "player"];
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") roundData = ["Player wins, paper beats rock", "player"];
        if (computerSelection === "scissors") roundData = ["Computer wins, scissors beat paper", "computer"];
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") roundData = ["Computer wins, rock beats scissors", "computer"];
        if (computerSelection === "paper") roundData = ["Player wins, scissors beat paper", "player"];
    }
    console.log(`Your Selection : ${playerSelection} / Computers Selection : ${computerSelection}`);
    return(roundData);
}

function game()
{
    let playerScore = 0, computerScore = 0;
    let playerSelection, computerSelection;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("What do you play \n Rock , Paper, Scissors");
        computerSelection = getComputerChoice();
        roundData = playRound(playerSelection,computerSelection);
        if(roundData[1] === "computer"){
            computerScore++;
            displayData(roundData[0], playerScore, computerScore);
        }
        if(roundData[1] === "player"){
            playerScore++;
            displayData(roundData[0], playerScore, computerScore);
        }
        if(roundData[1] === "draw"){
            displayData(roundData[0], playerScore, computerScore);
        }
    }

    if(playerScore > computerScore) console.log("Player Won!");
    if(playerScore < computerScore) console.log("Computer Won!");
    if(playerScore === computerScore) console.log("Draw!");


}

function displayData(roundMessage, playerScore, computerScore){
    console.log(`${roundMessage} \n Player Score : ${playerScore} /// Computer Score : ${computerScore}`);
}


game();

// 1000 computer vs computer games
// for (i = 0; i < 10; i++){
//     playRound(getComputerChoice(), getComputerChoice());
// }


//player vs computer
//alert(playRound(prompt("rock paper scissors"), getComputerChoice()));;