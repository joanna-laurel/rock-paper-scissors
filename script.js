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


// remaining problems this session (first 4 clearly related):

// game ends properly, goes to welcome message, but doesn't reset scores
// user is welcomed to the game at the beginning of second round 
// humanChoice so far accepts everything or nothing as valid lol
// humanChoice prompt accepts both valid and invalid options (although if they are invalid the human loses, so there's that incentive)


// fixed since last time:

// not really a fix but I figured out the Live Preview extension so I can use prompt function
// the scoring does actually work, at least starting with round 2 (must return values to parent function!)
// the round counter works how I intended: ties don't count, best 3 out of 5 then game ends
// game actually starting at the second round issue (no more practice round)
// this also fixed the welcome message issue
// functions not returning updated values (return the function not the value!)
// 



let humanScore = 0;
let computerScore = 0;

playGame();   
    
// const computerChoice = getComputerChoice();  //value is rock, paper, or scissors
// const humanChoice = getHumanChoice();        //value is rock, paper, or scissors
// const roundWinner = findRoundWinner();   //value is human, computer, or tie

function playGame() { 
    console.log("Welcome to a new game of Rock, Paper, Scissors");
    
    if ((humanScore + computerScore) > 0) {
        humanScore = 0; computerScore = 0
    }

    while ((humanScore + computerScore) < 5) {

        
        console.log("Total scores: " + (humanScore + computerScore)); //at this point the scores work
        playRound(); 
        console.log("Roundwinner is " + roundWinner);
        console.log("the round is played and now we need scores"); //first round doesn't tally
        getHumanScore();
        getComputerScore();
        console.log("The score is Human: " + humanScore + ", Computer: " + computerScore)
        // let totalScore = (humanScore + computerScore);
        // if (totalScore === 5) {
        //     gameOver;
        // } else {
        //     console.log("The current score is " + humanScore, computerScore);   
        } gameOver();
   
}
    
function playRound() {
    // const computerChoice = getComputerChoice();  //value is rock, paper, or scissors
    // const humanChoice = getHumanChoice();        //value is rock, paper, or scissors
    // const roundWinner = findRoundWinner();   //value is human, computer, or tie
    // getComputerChoice(); //working the first time
    // getHumanChoice(); //half working -- need to fix null situation
    // findRoundWinner(); //now returns value properly to playGame
    // return (computerChoice), (humanChoice), (roundWinner);
    return getComputerChoice(), getHumanChoice(), findRoundWinner(); //returning scores now every 3 rounds????
}    

function getComputerChoice(computerChoice) {               
    let choice = ((Math.random() * 9) + 1);  //all #s 1.0000000-9.9999999
    console.log("The computer has made a choice and awaits the human's decision.");
    if (choice < 4) {
        computerChoice = "rock";             //between 1 and 4
        return computerChoice; 
    } else if (choice > 7) {
        computerChoice = "scissors";         //between 7 and basically-10
        return computerChoice;
    } else {
        computerChoice = "paper";            //between 4 and 7 
        return computerChoice;  
    }              
}  
        
function getHumanChoice(humanChoice) {  //currently works for no choices         
    let choice = prompt("Please enter rock, paper, or scissors.").toLowerCase();   
    // if (humanChoice === "paper") {
    // // ((humanChoice === "paper") || (humanChoice === "rock") || (humanChoice === "scissors")) {
    //     return humanChoice;
    // } else if (humanChoice === "rock") {
    //     return humanChoice;
    // } else if (humanChoice === "scissors") {
    //     return humanChoice;f
    // } else {
        console.log("I'm sorry, that is not on the list of approved items"); 
        // return ("paper");
        humanChoice = choice 
        return (humanChoice);  
    // }  
}    
 
function findRoundWinner(roundWinner) {              //returns human, computer, or tie
    console.log("The human has chosen " + humanChoice + ".");
    console.log("what about the computer");
    console.log("The computer has chosen " + computerChoice + "."); 
    if (((humanChoice === "rock") && (computerChoice === "scissors")) || 
        ((humanChoice === "scissors") && (computerChoice === "paper")) ||
        ((humanChoice === "paper") && (computerChoice === "rock"))) {                      
            console.log("The human is victorious and has gained one point."); 
            // return ("human");
            roundWinner = ("human");
            return roundWinner;
        } else if (humanChoice === computerChoice) { 
            console.log("It's a tie!"); 
            // return ("tie");  
            roundWinner = ("tie");
            return roundWinner;
        } else {
            console.log("The computer triumphs!!"); 
            // return ("computer");  
            roundWinner = ("computer");
            return roundWinner;    
        }     
}   

console.log("random interjection")
       
function getHumanScore(humanScore) {  
    console.log(humanScore);
    console.log(roundWinner);
    // let pointForHuman = humanScore++;
    if (roundWinner === "human") {
        humanScore++;
    } return humanScore;   
}

function getComputerScore(computerScore) {
    console.log(computerScore);
    console.log(roundWinner);
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


// function getHumanChoice(humanChoice) {
//     issues prompt("Rock, paper, or scissors?")
//     converts to lowercase = (humanChoice.toLowerCase())
//     if (humanChoice.toLowerCase() === "rock" || "scissors" || "paper") {
//         return (humanChoice.toLowerCase);
//     } else {
//         prompt("Try again!");


 

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
