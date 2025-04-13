let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const header = document.querySelector("h2");
const greeting = document.getElementById("greeting");
const pleaseSelect = document.querySelector("h3");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const choiceDiv = document.getElementById("choiceDiv");
const humanObject = document.getElementById("humanObject");
const computerObject = document.getElementById("computerObject");
const scoreDiv = document.getElementById("scoreDiv");
const currentScore = document.getElementById("currentScore");
const roundWinner = document.getElementById("roundWinner");
const humanScoreDisplay = document.getElementById("humanScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tableBody = document.querySelector("tbody");

// const wait = (ms) => new Promise((resolve) =>
//     setTimeout(resolve, ms))

// function chooseRock() {playRound("rock")};
// function choosePaper() {playRound("paper")};
// function chooseScissors() {playRound("scissors")};

playGame();

function playGame() {
    // let rockButton = document.getElementById("rockButton");
    // let paperButton = document.getElementById("paperButton");
    // let scissorsButton = document.getElementById("scissorsButton");
    function chooseRock() {playRound("rock")};
    function choosePaper() {playRound("paper")};
    function chooseScissors() {playRound("scissors")};
    rockButton.addEventListener("click", chooseRock);
    paperButton.addEventListener("click", choosePaper);
    scissorsButton.addEventListener("click", chooseScissors);
    
    
    function playRound(humanSelection) {
        greeting.textContent = "game in progress";
        roundCount++;
        console.log("I got the human selection");
        const computerSelection = getComputerChoice();
        console.log("I got the robot selection");
        console.log(humanSelection);
        console.log(computerSelection);
        
        displayChoices(humanSelection, computerSelection);
        console.log("I displayed the two selections");
        const theRoundWinner = findRoundWinner(humanSelection, computerSelection);
        console.log("I found the round winner");
        updateScore(theRoundWinner);
        console.log("I updated the score");
        recordRoundHistory(roundCount, humanSelection, computerSelection, theRoundWinner);
        console.log("I recorded the round in the table");
        prepareForNextRound();
        console.log("I prepared for the next round");
        if ((humanScore == 5) || (computerScore == 5)) {
            rockButton.removeEventListener("click", chooseRock);
            paperButton.removeEventListener("click", choosePaper);
            scissorsButton.removeEventListener("click", chooseScissors);
            endGame()};
    }
}

function getComputerChoice() {  
    let choice = (Math.random() * 3);

    if (choice < 1) {return "rock"} 
    else if (choice > 2) {return "paper"} 
    else {return "scissors"}            
}   

function displayChoices(humanChoice, computerChoice) {
    pleaseSelect.textContent = "";
    humanObject.textContent = humanChoice
    computerObject.textContent = computerChoice

    // const wait = (ms) => new Promise((resolve) =>
    //     setTimeout(resolve, ms))

    // wait(1000).then(displayHumanObject);
    // wait(1500).then(displayComputerObject);
    // wait(5000).then(console.log("hi"));
   
    // function displayHumanObject() {humanObject.textContent = humanChoice}; 
    // function displayComputerObject() {computerObject.textContent = computerChoice};

    // // setTimeout(displayHumanObject, 1000);
    // setTimeout(displayComputerObject, 3000);    
}

function findRoundWinner(humanChoice, computerChoice) { 

    if (((humanChoice == "rock") && (computerChoice == "scissors")) || 
        ((humanChoice == "scissors") && (computerChoice == "paper")) ||
        ((humanChoice == "paper") && (computerChoice == "rock"))) {
            roundWinner.textContent = "round " + roundCount + ": the human is victorious.";
            return "human";
            // humanScore++;
            // humanScoreDisplay.textContent = humanScore;
            // computerScoreDisplay.textContent = computerScore;
            // return humanScore;
        } else if (humanChoice === computerChoice) { 
            roundWinner.textContent = "round " + roundCount + " is a tie!" 
            return "tie";
        } else {
            roundWinner.textContent = "the computer wins round " + roundCount + "."; 
            return "computer";
            // computerScore++;
            // humanScoreDisplay.textContent = humanScore;
            // computerScoreDisplay.textContent = computerScore;
            // return computerScore; 
        }    
} 

function updateScore(thisRoundsWinner) {
    if (thisRoundsWinner == "human") {
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        return humanScore;
    } else if (thisRoundsWinner == "computer") {
        computerScore++;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        return computerScore; 
    }
}

function recordRoundHistory(theCount, humanChoice, computerChoice, thisRoundsWinner) {
    let roundArray = [theCount, humanChoice, computerChoice, thisRoundsWinner];
    const tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    console.log(roundArray);

    roundArray.forEach(element => {
        const tableData = document.createElement("td");
        tableData.classList.add("dataText")
        tableData.textContent = element; {
        tableRow.appendChild(tableData);
        }
    });
    
}
    
function prepareForNextRound() {
    // function resetChoices() {
        humanObject.textContent = "???"; 
        computerObject.textContent = "???"
    // }
    // function reprompt() {
        pleaseSelect.textContent = "please select another object."
    // }
    // setTimeout(resetChoices, 3000);
    // setTimeout(reprompt, 4000);

}

function endGame() { 
    currentScore.textContent = "final score:";
    const gameOverDiv = document.createElement("div");
    const gameOver = document.createElement("h1");
    const gameWinner = document.createElement("h3");
    const playAgainButton = document.createElement("button");
    
    gameOver.textContent = "GAME OVER";
    playAgainButton.textContent = "PLAY AGAIN";
    playAgainButton.classList.add("playAgainButton");

    if (humanScore > computerScore) {
        gameWinner.textContent = "The lucky human has won the game.";
    } else {
        gameWinner.textContent = "The robot has won by " 
            + (computerScore - humanScore) + ".";
    }
    
    gameOverDiv.classList.add("gameOverDiv");
    // const header = document.querySelector("h2");
    header.appendChild(gameOverDiv);
    gameOverDiv.append(gameOver, gameWinner, playAgainButton);
    
    playAgainButton.addEventListener("click", resetEverything);
        
    function resetEverything() {
        // console.log("i'm resetting stuff");
        
        humanScore = 0;
        computerScore = 0;
        let finalRoundCount = roundCount;
        roundCount = 0;
        console.log(finalRoundCount);
        humanScoreDisplay.textContent = "0";
        computerScoreDisplay.textContent = "0";
        greeting.textContent = "welcome to a new game!";
        currentScore.textContent = "current score:";
        roundWinner.textContent = "...awaiting the first selections..."
        pleaseSelect.textContent = "please select an object:";

        for (i = 0; i < finalRoundCount; i++) {
            const tableBody = document.querySelector("tbody");
            tableBody.removeChild(tableBody.lastElementChild);
        }
        header.removeChild(gameOverDiv);
        
        // playGame();   
    } playGame(); 
}
   
