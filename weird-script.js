// This file will live on as documentation of that first time I tried to program
// a rock-paper-scissors game but I did not understand how parameters and
// arguments worked and otherwise made stuff really complicated. Let's all just
// be impressed that somehow I got it to execute effectively anyway.

let humanScore = 0;
let computerScore = 0;

playGame(); 

function playGame() { 

    console.log("Welcome to a new game of Rock, Paper, Scissors.");
    
    if ((humanScore + computerScore) > 0) {
        humanScore = 0; computerScore = 0
    }

    while ((humanScore + computerScore) < 5) { //we aren't counting tie rounds!
        playRound(); 
        console.log(roundWinner)
        getHumanScore();
        getComputerScore();
        console.log("The score is Human: " + humanScore + ", Computer: " + computerScore) 
    } 
    
    gameOver();
}
    
function playRound() { 
    return getComputerChoice(), getHumanChoice(), findRoundWinner(); 
}    

function getComputerChoice() {  
    let choice = ((Math.random() * 9) + 1); 
    console.log("The computer has made a choice and awaits the human's decision.");
    
    if (choice < 4) {
        computerChoice = "rock"; 
        return computerChoice; 
    } else if (choice > 7) {
        computerChoice = "scissors"; 
        return computerChoice;
    } else {
        computerChoice = "paper";
        return computerChoice; 
    }              
}  
        
function getHumanChoice() { 
    console.log("hello");
    let choice = prompt("Please enter rock, paper, or scissors.");
        
    if (choice === null) {
        console.log("The human has conceded the game. The computer wins!");
        playGame();
    }

    choice.toLowerCase();
    
    if (choice.toLowerCase() === "rock") {
        humanChoice = ("rock");
        return humanChoice;
    } else if (choice.toLowerCase() === "paper") {
        humanChoice = ("paper");
        return humanChoice;
    } else if (choice.toLowerCase() === "scissors") {
        humanChoice = ("scissors");
        return humanChoice;
    } else {
        console.log("I'm sorry, " + choice + " is an unauthorized object.");   
    } 

    getHumanChoice();
}    
 
function findRoundWinner() { 
    console.log("The human has chosen " + humanChoice + ".");
    console.log("The computer has chosen " + computerChoice + "."); 
    
    if (((humanChoice === "rock") && (computerChoice === "scissors")) || 
        ((humanChoice === "scissors") && (computerChoice === "paper")) ||
        ((humanChoice === "paper") && (computerChoice === "rock"))) {                      
            console.log("The human is victorious and has gained one point."); 
            roundWinner = ("human");
            return roundWinner;
        } else if (humanChoice === computerChoice) { 
            console.log("It's a tie!"); 
            roundWinner = ("tie");
            return roundWinner;   
        } else {
            console.log("The computer triumphs!!"); 
            roundWinner = ("computer");
            return roundWinner;    
        }     
}   
       
function getHumanScore() {  
    if (roundWinner === "human") {
        humanScore++;
    } return humanScore;   
}

function getComputerScore() {
    if (roundWinner === "computer") {
        computerScore++;
    } return computerScore;
}

function gameOver() { 
    let humanWins = (humanScore > computerScore); 
    
    if (humanWins === true) {
        console.log("The lucky human has won with " + humanScore + " points.")
        console.log("Let's play again!");
        playGame();
    } else {
        console.log("Alas, the computer prevails. The human loses " + humanScore + " to " + computerScore + ".");
        console.log("Let's play again!");
        playGame();
    }
}
