let humanScore = 0
let computerScore = 0

const choiceDiv = document.getElementById("choiceDiv");
const scoreDiv = document.getElementById("scoreDiv");
const pleaseSelect = document.querySelector("h3");

choiceDiv.style.visibility = "hidden";
scoreDiv.style.visibility = "hidden";

playGame();

function playGame() {
// ("Welcome to a new game of Rock, Paper, Scissors!")

    while (humanScore + computerScore < 5) { 
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        displayChoices(humanSelection, computerSelection);
        playRound(humanSelection, computerSelection);
        moveOn();
    }
    endGame();
}

function getComputerChoice() {  
    let choice = (Math.random() * 3);

    if (choice < 1) {
        return "rock";
    } else if (choice > 2) {
        return "paper";
    } else {
        return "scissors";
    }            
}  

function getHumanChoice() {  
    const rockButton = document.getElementById("rockButton");
    const paperButton = document.getElementById("paperButton");
    const scissorsButton = document.getElementById("scissorsButton");

    rockButton.addEventListener('click', function (e) {
        return "rock";
    });
    paperButton.addEventListener('click', function (e) {
        return "paper";
    });
    scissorsButton.addEventListener('click', function (e) {
        return "scissors";
    });
}  

function displayChoices(humanChoice, computerChoice) {
    pleaseSelect.style.visibility = "hidden";

    const humanObject = document.getElementById("humanObject");
    const computerObject = document.getElementById("computerObject");
    humanObject.textContent = humanChoice;
    computerObject.textContent = computerChoice;
    choiceDiv.style.visibility = "visible";
}

function playRound(humanChoice, computerChoice) { 
    scoreDiv.style.visibility = "visible";

    const roundWinner = document.getElementById("roundWinner");

    if (((humanChoice === "rock") && (computerChoice === "scissors")) || 
        ((humanChoice === "scissors") && (computerChoice === "paper")) ||
        ((humanChoice === "paper") && (computerChoice === "rock"))) {
            roundWinner.textContent = "the human is victorious.";
            humanScore++;
            const humanScoreDisplay = document.getElementById("humanScoreDisplay");
            humanScoreDisplay.textContent = humanScore;
            return humanScore;
        } else if (humanChoice === computerChoice) { 
            roundWinner.textContent = "it's a tie!" 
        } else {
            roundWinner.textContent = "the computer wins this round." 
            computerScore++;
            const computerScoreDisplay = document.getElementById("computerScoreDisplay");
            computerScoreDisplay.textContent = computerScore;
            return computerScore; 
        }     
} 

function moveOn() {
    // put something here to pause for like 2 seconds, maybe fade out stuff?
    choiceDiv.style.visibility = "hidden";
    const roundWinner = document.getElementById("roundWinner");
    roundWinner.textContent = "";
    // do something to prompt for next round
    pleaseSelect.style.visibility = "visible";
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
    
    playAgainButton.addEventListener('click', function (e) {
        humanScore = 0;
        computerScore = 0;
        playGame();
    });

}

