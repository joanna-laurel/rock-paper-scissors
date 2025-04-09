let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const pleaseSelect = document.querySelector("h3");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const choiceDiv = document.getElementById("choiceDiv");
const humanObject = document.getElementById("humanObject");
const computerObject = document.getElementById("computerObject");
const scoreDiv = document.getElementById("scoreDiv");
const roundWinner = document.getElementById("roundWinner");
const humanScoreDisplay = document.getElementById("humanScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const table = document.querySelector("table");


playGame();

function playGame() {

    rockButton.addEventListener("click", () => playRound("rock"));
    paperButton.addEventListener("click", () => playRound("paper"));
    scissorsButton.addEventListener("click", () => playRound("scissors"));
    
    
    function playRound(humanSelection) {
        roundCount++;
        const computerSelection = getComputerChoice();
        // console.log(humanSelection);
        // console.log(computerSelection);
        displayChoices(humanSelection, computerSelection);
        const theRoundWinner = findRoundWinner(humanSelection, computerSelection);
        // console.log(humanScore, computerScore);
        updateScore(theRoundWinner);
        recordRoundHistory(roundCount, humanSelection, computerSelection, theRoundWinner);
        prepareForNextRound();
        if ((humanScore == 5) || (computerScore == 5)) {endGame()};
    }
}

function getComputerChoice() {  
    let choice = (Math.random() * 3);

    if (choice < 1) {return "rock"} 
    else if (choice > 2) {return "paper"} 
    else {return "scissors"}            
}   

function displayChoices(humanChoice, computerChoice) {
    pleaseSelect.textContent = "OBJECTS WERE SELECTED";
    humanObject.textContent = humanChoice;
    computerObject.textContent = computerChoice;
    humanObject.classList.add("objectRevealed");
    computerObject.classList.add("objectRevealed");
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
    let roundArray = [theCount, humanChoice, computerChoice, thisRoundsWinner]
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    console.log(roundArray);

    roundArray.forEach(element => {
        const tableData = document.createElement("td");
        tableData.textContent = element; {
        tableRow.appendChild(tableData)
    }});
    
}
    
function prepareForNextRound() {
    function resetChoices() {
        humanObject.textContent = "???"; 
        computerObject.textContent = "???"
    }
    function reprompt() {
        pleaseSelect.textContent = "please select another object."
    }
    setTimeout(resetChoices, 3000);
    setTimeout(reprompt, 4000);
}

function endGame() { 
    const gameOverDiv = document.createElement("div");
    const gameOver = document.createElement("h1");
    const gameWinner = document.createElement("h3");
    const playAgainButton = document.createElement("button");
    
    gameOver.textContent = "GAME OVER";
    playAgainButton.textContent = "PLAY AGAIN";

    if (humanScore > computerScore) {
        gameWinner.textContent = "The lucky human has won the game.";
    } else {
        gameWinner.textContent = "Alas, the computer prevails. The human loses by " 
            + (computerScore - humanScore) + ".";
    }
    
    gameOverDiv.classList.add("gameOverDiv")
    const header = document.querySelector("h1");
    header.appendChild(gameOverDiv);
    gameOverDiv.append(gameOver, gameWinner, playAgainButton);
    
    playAgainButton.addEventListener('click', resetEverything) 
        
    function resetEverything() {
        humanScore = 0;
        computerScore = 0;
        roundCount = 0;
        roundWinner.textContent = "welcome to a new game of rock, paper, scissors.";
        header.removeChild(gameOverDiv);
        pleaseSelect.textContent = "please select an object:"
        playGame();
    }

}

