//Game progression pseudocode:

// Prompt user to input rock, paper, or scissors        
// Convert input to all lowercase                                  getHumanChoice
// If converted input /= rock, paper, or scissors:                 getHumanChoice
    // Print message saying so                                     getHumanChoice 
    // Go back to line 3 until they get it right, then proceed     getHumanChoice
// Generate random number                                          getComputerChoice
// Convert number to rock, paper, or scissors (equal chances obv)  getComputerChoice
// Compare human and computer selections                           findRoundWinner
// If it's a tie:                                                  findRoundWinner
    // Print tie message                                           findRoundWinner
    // Go back to line 3
// If there's a winner:                                            findRoundWinner
    // Add one point to winner's running total score               
// If human score + computer score = 5
    // Compare human and computer scores and determine winner      
    // Print message that game is over, who won, and the score
        //Possible customized messages depending on scores
    // Reset scores to 0
    // Go back to line 3 (we'll assume they want to play again)
// If total score < 5, 
    // Print message declaring round winner and current running scores
    // Go back to line 3                            




  
// function playGame {
//     runs playRound function
//     contains or refers to running score function
//     when total of scores = 5, game over
//     executes end-of-game stuff
// }



let humanScore = 0;
let computerScore = 0;
    
const computerChoice = getComputerChoice();  //value is rock, paper, or scissors
// console.log(computerChoice.toUpperCase())
const humanChoice = getHumanChoice();        //value is rock, paper, or scissors
// console.log(humanChoice);
const roundWinner = findRoundWinner();   //value is human, computer, or tie
// console.log(roundWinner);  
// const runningScore = updateScore();  

console.log("Welcome to Rock, Paper, Scissors")

playGame(); 
 
function playGame() {
    console.log("Enter rock, paper, or scissors.");
    getComputerChoice();
    getHumanChoice();
    findRoundWinner(); 
    tallyScore(); 
    let totalScore = (humanScore + computerScore);
    if (totalScore === 5) {
        gameOver;
    } else {
        console.log("The current score is " + humanScore, computerScore);
        playGame;
    }  
}

function getComputerChoice() {               //returns rock, paper, or scissors
    let choice = ((Math.random() * 9) + 1);  //all #s 1-9.9999999
    if (choice < 4) {                        //between 1 and 4
        return ("rock");
    } else if (choice > 7) {                 //between 7 and basically-10
        return ("scissors");
    } else return ("paper");                 //between 4 and 7
}  
    
function getHumanChoice() {                  //stand-in for humanChoice while I figure out prompt
    let choice = ((Math.random() * 9) + 1); 
    if (choice < 4) {                       
        return ("scissors");
    } else if (choice > 7) {                
        return ("paper");
    } else return ("rock"); 
} 

// ALTERNATIVE playRound() idea with 7 different message possibilities:
// 
// function playRound() {  //returns winner: human or computer or nobody
//     console.log(humanChoice);
//     console.log(computerChoice.toUpperCase()); 
//     if ((humanChoice === "rock") && (computerChoice === "scissors")) {
//         console.log("human smashes scissors"); return "human";
//     } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
//         console.log("computer envelops rock"); return "computer";
//     } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
//         console.log("computer slices up paper"); return "computer";
//     } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
//         console.log("human wraps up rock"); return "human";
//     } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
//         console.log("human makes a paper snowflake"); return "human";
//     } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
//         console.log("computer obliterates scissors"); return "computer";
//     } else console.log("IT'S A TIE!!!"); return "nobody"
// }

function findRoundWinner() {              //returns human, computer, or tie
    console.log("The human has chosen " + humanChoice + ".");
    console.log("The computer has chosen " + computerChoice + ".");
    if (((humanChoice === "rock") && (computerChoice === "scissors")) || 
        ((humanChoice === "scissors") && (computerChoice === "paper")) ||
        ((humanChoice === "paper") && (computerChoice === "rock"))) {
            // humanScore++;                        
            console.log("The human is victorious and has gained one point.");           
            // getComputerChoice;
            // return "human";
            return humanScore++, computerScore;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            // return "tie";
            // getComputerChoice; 
            return humanScore, computerScore;  
        } else {
            // return "computer";
            // computerScore++;    
            console.log("The computer triumphs!!");
            // console.log("Computer has " + computerScore + " points.")
            // getComputerChoice;  //add score announcement  
            return humanScore, computerScore++;         
        }     
}  

function tallyScore(humanScore, computerScore) {
    return (humanScore, computerScore);
}

function gameOver(humanScore, computerScore) {
   let humanWins = (humanScore > computerScore);
   if (humanWins === true) {
    console.log("The lucky human has won with " + humanScore + " points.")
    console.log("Let's play again!")
   } else {
    console.log("Alas, the computer prevails. The human loses " + humanScore + " to " + computerScore + ".")
   }
}
  

// console.log(humanScore) 
                                                   

// function updateScore() {   //adds 0 or 1 to humanScore, computerScore
//     if (roundWinner === "human") {
//         humanScore++;
//         console.log("human wins and has " + humanScore);    
//         return humanScore;  
//     } else if (roundWinner === "computer") {
//         computerScore++;
//         console.log("computer wins and has " + computerScore);
//         return computerScore;
//     } else {
//         console.log("it's a tie")
//         totalScore;   
//     }          
// }  


// next up: how to keep and update score

// figure out how to prompt for human input


// function getHumanChoice(humanChoice) {
//     issues prompt("Rock, paper, or scissors?")
//     converts to lowercase = (humanChoice.toLowerCase())
//     if (humanChoice.toLowerCase() === "rock" || "scissors" || "paper") {
//         return (humanChoice.toLowerCase);
//     } else {
//         prompt("Try again!");


// function humanScore {
//     starts at zero
//     adds 1 if human wins round
// }

// function computerScore {
//     starts at zero
//     adds 1 if computer wins round
// }

