let playerchoice = null;
let playerScoreNum = 0, computerScoreNum = 0;
console.log(playerchoice);

const rockLink = "https://cdn-icons-png.flaticon.com/512/1213/1213131.png";
const paperLink = "https://cdn-icons-png.flaticon.com/512/5812/5812594.png";
const scissorsLink = "https://cdn-icons-png.flaticon.com/512/4339/4339856.png";
const questionLink = "https://cdn-icons-png.flaticon.com/512/3106/3106703.png";


const gameArea = document.querySelector(".gameArea");
const playerSide = document.querySelector(".playerSide");
const computerSide = document.querySelector(".computerSide");

const playerScore = playerSide.querySelector(".playerScore");
const computerScore = computerSide.querySelector(".computerScore");

const pScore = playerScore.querySelector("#pScore");
const cScore = computerScore.querySelector("#cScore");

const chooseRock = document.querySelector("chooseRock");
const choosePaper = document.querySelector("choosePaper");
const chooseScissors = document.querySelector("chooseScissors");

const resultArea = document.querySelector(".resultArea");
console.log(resultArea);

const pImg = document.querySelector("#pImg");
const cImg = document.querySelector("#cImg");

const choiceConts = document.querySelectorAll(".choose");
choiceConts.forEach(element => {
    console.log(element);
    element.addEventListener("mouseenter", (e) => {
        e.target.classList.add("selected");
    });
    element.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("selected");
    });

    element.addEventListener("click", (e) => {
        choiceConts.forEach(element1 => {
            element1.classList.remove("clicked");
        })
        e.target.classList.add("clicked");
        if(e.target.classList.contains("chooseRock")){
            playerchoice="rock";
        }
        if(e.target.classList.contains("choosePaper")){
            playerchoice="paper";
        }
        if(e.target.classList.contains("chooseScissors")){
            playerchoice="scissors";
        }
    });
});



const confirm = document.querySelector(".confirm");
confirm.addEventListener("mouseenter", (e) => {
    e.target.classList.add("selected");
});
confirm.addEventListener("mouseleave", (e) => {
    e.target.classList.remove("selected");
});
confirm.addEventListener("click", (e) =>{
    if(confirm.innerText === "Restart"){
        location.reload();
        return;
    }
    e.target.classList.remove("selected");
    choiceConts.forEach(element1 => {
        element1.classList.remove("clicked");
    })
    if(playerchoice !== null) displayData(playRound(playerchoice, getComputerChoice()));
    playerchoice = null;
});


//console.log(choiceConts);

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
    if (computerSelection === playerSelection)  roundData = ["Draw, both players chose same", 0 , 0];
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") roundData = ["Computer wins, paper beats rock", 0, 1];
        if (computerSelection === "scissors") roundData = ["Player wins, rock beats scissors", 1, 0];
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") roundData = ["Player wins, paper beats rock", 1, 0];
        if (computerSelection === "scissors") roundData = ["Computer wins, scissors beat paper", 0, 1];
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") roundData = ["Computer wins, rock beats scissors", 0, 1];
        if (computerSelection === "paper") roundData = ["Player wins, scissors beat paper", 1, 0];
    }
    roundData[3] = playerSelection;
    roundData[4] = computerSelection;
    console.log(`Your Selection : ${playerSelection} / Computers Selection : ${computerSelection}`);
    return(roundData);
}


function displayData(data){
    console.log(data);
    if(data[3] === "rock"){
        pImg.src=rockLink;
    }else if(data[3] === "paper"){
        pImg.src=paperLink;
    }else if(data[3] === "scissors"){
        pImg.src=scissorsLink;
    }else{
        pImg.src=questionLink;
    }

    if(data[4] === "rock"){
        cImg.src=rockLink;
    }else if(data[4] === "paper"){
        cImg.src=paperLink;
    }else if(data[4] === "scissors"){
        cImg.src=scissorsLink;
    }else{
        cImg.src=questionLink;
    }

    if(data[1] === 1){
        playerScoreNum++;
        pScore.innerText = playerScoreNum;
    }
    if(data[2] === 1){
        computerScoreNum++;
        cScore.innerText = computerScoreNum;
    }

    if(playerScoreNum === 3){
        showWinner("Player");    
    }
    if(computerScoreNum === 3){
        showWinner("Computer");
    }

    // pScore.textContent = `${playerScore}`;
    // cScore.textContent = `${computerScore}`;
}

function showWinner(winner){
    resultArea.innerText = `${winner} won the game!`
    confirm.innerText = "Restart";
    confirm.classList.add("selected");
}


//game();

// 1000 computer vs computer games
// for (i = 0; i < 10; i++){
//     playRound(getComputerChoice(), getComputerChoice());
// }


//player vs computer
//alert(playRound(prompt("rock paper scissors"), getComputerChoice()));;