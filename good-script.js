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

const wait = (ms) => new Promise((resolve) =>
    setTimeout(resolve, ms))

playGame();

function playGame() {
    function chooseRock() {playRound("rock")};
    function choosePaper() {playRound("paper")};
    function chooseScissors() {playRound("scissors")};
    
    rockButton.addEventListener("click", chooseRock);
    paperButton.addEventListener("click", choosePaper);
    scissorsButton.addEventListener("click", chooseScissors);
    
    function playRound(humanSelection) {
        const invisibleDiv = document.createElement("div");
        invisibleDiv.classList.add("invisibleDiv");
        header.appendChild(invisibleDiv);

        roundCount++;
        greeting.textContent = "game in progress";
        pleaseSelect.textContent = "";
        roundWinner.textContent = "...";

        function displayHumanObject() {humanObject.textContent = humanSelection}; 
        function displayComputerObject() {computerObject.textContent = computerSelection};
        function showRoundWinner() {displayRoundWinner(theRoundWinner)};
        function changeTheScore() {updateScore(theRoundWinner)};
        function addTheData() {recordRoundHistory(roundCount, humanSelection, computerSelection, theRoundWinner)};
        function freeUpButtons() {header.removeChild(invisibleDiv)};
        
        const computerSelection = getComputerChoice();
        const theRoundWinner = findRoundWinner(humanSelection, computerSelection);
        wait(500).then(displayHumanObject);
        wait(1500).then(displayComputerObject);
        wait(2500).then(showRoundWinner);
        wait(3000).then(changeTheScore);
        wait(4000).then(addTheData);
        wait(5000).then(seeIfItsOverYet);
        wait(5010).then(freeUpButtons);

        function seeIfItsOverYet() {
            if ((humanScore == 5) || (computerScore == 5)) {
                rockButton.removeEventListener("click", chooseRock);
                paperButton.removeEventListener("click", choosePaper);
                scissorsButton.removeEventListener("click", chooseScissors);
                endGame();
            } else {prepareForNextRound()};
        }
    }
}

function getComputerChoice() {  
    let choice = (Math.random() * 3);

    if (choice < 1) {return "rock"} 
    else if (choice > 2) {return "paper"} 
    else {return "scissors"}            
}   

function findRoundWinner(humanChoice, computerChoice) { 
    if (((humanChoice == "rock") && (computerChoice == "scissors")) || 
        ((humanChoice == "scissors") && (computerChoice == "paper")) ||
        ((humanChoice == "paper") && (computerChoice == "rock"))) {
            return "human";
        } else if (humanChoice === computerChoice) { 
            return "tie";
        } else {
            return "robot";}  
} 

function displayRoundWinner(thisRoundsWinner) {
    if (thisRoundsWinner == "human") {
        roundWinner.textContent = "The human wins round " + roundCount + ".";
    } else if (thisRoundsWinner == "robot") {
        roundWinner.textContent = "The robot wins round " + roundCount + ".";
    } else {roundWinner.textContent = "It's a tie!"}
}

function updateScore(thisRoundsWinner) {
    if (thisRoundsWinner == "human") {
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        return humanScore;
    } else if (thisRoundsWinner == "robot") {
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
    humanObject.textContent = "?"; 
    computerObject.textContent = "?";
    pleaseSelect.textContent = "please select another object:"
    roundWinner.textContent = "...";
}

function endGame() { 
    currentScore.textContent = "final score:";
    const gameOverDiv = document.createElement("div");
    const gameOver = document.createElement("h1");
    const gameWinner = document.createElement("h4");
    const playAgainButton = document.createElement("button");
    
    gameOver.textContent = "GAME OVER";
    playAgainButton.textContent = "PLAY AGAIN";
    playAgainButton.classList.add("playAgainButton");

    if (humanScore > computerScore) {
        gameWinner.textContent = "The lucky human won the game.";
    } else {
        gameWinner.textContent = "The robot won by " 
            + (computerScore - humanScore) + ".";
    }

    gameOverDiv.classList.add("gameOverDiv");
    header.appendChild(gameOverDiv);
    gameOverDiv.append(gameOver, gameWinner, playAgainButton);
    playAgainButton.addEventListener("click", resetEverything);
        
    function resetEverything() {
        humanScore = 0;
        computerScore = 0;
        let finalRoundCount = roundCount;
        roundCount = 0;
        console.log(finalRoundCount);
        humanScoreDisplay.textContent = "0";
        computerScoreDisplay.textContent = "0";
        humanObject.textContent = "?";
        computerObject.textContent = "?";
        greeting.textContent = "welcome to a new game!";
        currentScore.textContent = "current score:";
        roundWinner.textContent = "...awaiting the first selections..."
        pleaseSelect.textContent = "please select an object:";

        for (i = 0; i < finalRoundCount; i++) {
            const tableBody = document.querySelector("tbody");
            tableBody.removeChild(tableBody.lastElementChild);
        }
        
        header.removeChild(gameOverDiv);
  
    } playGame(); 
}
   
