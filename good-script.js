let roundCount = 0
let humanScore = 0
let computerScore = 0

playGame();

function playGame() {
    console.log("Welcome to a new game of Rock, Paper, Scissors!")
    console.log("This game will continue for 5 rounds.")

    while (roundCount < 5) { 
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        getRoundWinner(humanSelection, computerSelection);
        roundCount++
        console.log("Round " + roundCount + " concludes. Score is Human: " 
            + humanScore + ", Computer: " + computerScore + ".");
    }
    endGame();
}

function getComputerChoice() {  
    let choice = (Math.random() * 3);
    // is it bad form to do this math the simplest way that it works?
    // aka why are other people changing this to produce integers?
    console.log("The computer has made a choice and awaits the human's decision.");

    if (choice < 1) {
        return "rock";
    } else if (choice > 2) {
        return "paper";
    } else {
        return "scissors";
    }            
}  

function getHumanChoice() {      
    let input = prompt("Please enter rock, paper, or scissors.");

    if (input === null) {
        endGame();
    }
    return input.toLowerCase(); 
}  

function getRoundWinner(humanChoice, computerChoice) { 
    while (((humanChoice !== "rock")) && 
           ((humanChoice !== "paper")) && 
           ((humanChoice !== "scissors"))) {
            console.log("I'm sorry, " + humanChoice + " is an unauthorized object.");
            humanChoice = getHumanChoice();
           }

    console.log("The human has chosen " + humanChoice + ".");
    console.log("The computer has chosen " + computerChoice + "."); 

    if (((humanChoice === "rock") && (computerChoice === "scissors")) || 
        ((humanChoice === "scissors") && (computerChoice === "paper")) ||
        ((humanChoice === "paper") && (computerChoice === "rock"))) {
            console.log("The human is victorious."); 
            return humanScore++;
        } else if (humanChoice === computerChoice) { 
            console.log("It's a tie!"); 
        } else {
            console.log("The computer triumphs!!"); 
            return computerScore++; 
        }     
}  

function endGame() { 
    if (roundCount < 5) {
        console.log("The human has conceded the game. The computer wins by default!");
    } else if (humanScore > computerScore) {
        console.log("The lucky human has won the game.")
    } else if (humanScore === computerScore){
        console.log("There is no winner this time.")
    } else {
        console.log("Alas, the computer prevails. The human loses by " 
            + (computerScore - humanScore) + ".");
    }
    
    console.log("Let's play again!");
    console.log(" ")
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    playGame();
}

