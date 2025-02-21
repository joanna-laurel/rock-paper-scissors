//Game progression pseudocode:

// Prompt user to input rock, paper, or scissors
// Convert input to all lowercase
// If converted input /= rock, paper, or scissors:
    // Print message saying so
    // Go back to line 3 until they get it right, then proceed
// Generate random number 
// Convert number to rock, paper, or scissors (equal chances obv)
// Compare human and computer selections
// If it's a tie: 
    // Print tie message
    // Go back to line 3
// If there's a winner:
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






//Possible functions suggested by TOP + my notes (will need more functions)

// function getComputerChoice(computerChoice) {
//     chooses a random number and converts to rock/paper/scissors
// }

// function getHumanChoice(humanChoice) {
//     issues prompt("Rock, paper, or scissors?")
//     converts to lowercase = (humanChoice.toLowerCase())
//     if input is invalid print prompts to try again   
// }

// function humanScore {
//     starts at zero
//     adds 1 if human wins round
// }

// function computerScore {
//     starts at zero
//     adds 1 if computer wins round
// }

// function playRound(humanChoice, computerChoice) {
//     compares computerChoice to humanChoice
//     if (humanChoice = computerChoice) returns tie message
//     if winner, announcement and score update
//     running score: needs to live in own function?
// }

// function playGame {
//     runs playRound function
//     contains or refers to running score function
//     when total of scores = 5, game over
//     executes end-of-game stuff
// }




