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

  





function getComputerChoice() {               //returns rock, paper, or scissors
    let choice = ((Math.random() * 9) + 1);  //all #s 1-9.9999999
    if (choice < 4) {                        //between 1 and 4
        return ("rock");
    } else if (choice > 7) {                 //between 7 and basically-10
        return ("scissors");
    } else return ("paper");                 //between 4 and 7
}

const computerChoice = getComputerChoice();  //value is rock, paper, or scissors
// console.log(computerChoice.toUpperCase())

    
function getHumanChoice() {                  //stand-in for humanChoice while I figure out prompt
    let choice = ((Math.random() * 9) + 1); 
    if (choice < 4) {                       
        return ("rock");
    } else if (choice > 7) {                
        return ("scissors");
    } else return ("paper"); 
} 
    
const humanChoice = getHumanChoice();        //value is rock, paper, or scissors
// console.log(humanChoice);


// ALTERNATIVE findRoundWinner() idea with 7 different message possibilities:
// 
// function findRoundWinner() {  //returns winner: human or computer or nobody
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
            console.log("The human is victorious."); 
            return "human";  //add score announcement
        } if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return "tie";
        } else {
            console.log("The computer triumphs!!");
            return "computer";  //add score announcement
        }     
}

const roundWinner = findRoundWinner();   //value is human, computer, or tie
// console.log(roundWinner);




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

// function playGame {
//     runs playRound function
//     contains or refers to running score function
//     when total of scores = 5, game over
//     executes end-of-game stuff
// }




