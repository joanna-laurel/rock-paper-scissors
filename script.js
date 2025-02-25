//Game progression pseudocode:

//Prompt user to input rock, paper, or scissors        
//Convert input to all lowercase                                  
//If converted input /= rock, paper, or scissors:                 
    //Print message saying so                                      
    //Go back to line 3 until they get it right, then proceed     
//Generate random number                                          
//Convert number to rock, paper, or scissors (equal chances obv)  
//Compare human and computer selections                           
//If it's a tie:                                                  
    // Print tie message                                           
    // Go back to line 3
//If there's a winner:                                            
    // Add one point to winner's running total score               
//If human score + computer score = 5:
    //Compare human and computer scores and determine winner      
    //Print message that game is over, who won, and the score
    //Reset scores to 0
    //Go back to line 3 (we'll assume they want to play again)
//If total score < 5:
    //Print message declaring round winner and current running scores
    //Go back to line 3                            

//*******************************************************************//


let humanScore = 0;
let computerScore = 0;

playGame(); 


function playGame() { 
    console.log("Welcome to a new game of Rock, Paper, Scissors.");
    
    if ((humanScore + computerScore) > 0) { //operates as reset for new games
        humanScore = 0; computerScore = 0
    }

    while ((humanScore + computerScore) < 5) { //we aren't counting tie rounds!
        //getComputerChoice(); 
        //getHumanChoice(); 
        //findRoundWinner();
        playRound(); 
        console.log(roundWinner)
        getHumanScore();
        getComputerScore();
        console.log("The score is Human: " + humanScore + ", Computer: " + computerScore) 
    } 
    
    gameOver();
}
    
function playRound() { //does this need to even be its own thing?
    return getComputerChoice(), getHumanChoice(), findRoundWinner(); 
}    

function getComputerChoice() { //too wordy? streamline?        
    let choice = ((Math.random() * 9) + 1);  //all #s 1.0000000-9.9999999
    console.log("The computer has made a choice and awaits the human's decision.");
    if (choice < 4) {
        //return "rock";
        computerChoice = "rock"; //all #s between 1 and 4
        return computerChoice; 
    } else if (choice > 7) {
        //return "scissors";
        computerChoice = "scissors"; //all #s between 7 and basically-10
        return computerChoice;
    } else {
        //return "paper";
        computerChoice = "paper"; //all #s between 4 and 7 
        return computerChoice; 
    }              
}  
        
function getHumanChoice() {  //streamline back to OR statement? it should work now...        
    console.log("hello");
    let choice = prompt("Please enter rock, paper, or scissors.");
        
     
    if (choice === null) {  //this part actually works for cancellation
        console.log("The human has conceded the game. The computer wins!");
        playGame();
    }

    choice.toLowerCase();
    
    if (choice.toLowerCase() === "rock") {
    // // ((humanChoice === "paper") || (humanChoice === "rock") || (humanChoice === "scissors")) {
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
    getHumanChoice(); //remember to put parentheses after functions!!! 
}    
 
function findRoundWinner() { //merge this with getHuman/ComputerScore???
    console.log("The human has chosen " + humanChoice + ".");
    console.log("The computer has chosen " + computerChoice + "."); 
    if (((humanChoice === "rock") && (computerChoice === "scissors")) || 
        ((humanChoice === "scissors") && (computerChoice === "paper")) ||
        ((humanChoice === "paper") && (computerChoice === "rock"))) {                      
            console.log("The human is victorious and has gained one point."); 
            //return ("human");
            //return humanScore++, computerScore;
            roundWinner = ("human");
            return roundWinner;
        } else if (humanChoice === computerChoice) { 
            console.log("It's a tie!"); 
            //return ("tie");
            //return humanScore,computerScore;
            roundWinner = ("tie");  //is it necessary to return anything for a tie?
            return roundWinner;   
        } else {
            console.log("The computer triumphs!!"); 
            //return ("computer");  
            //return humanScore, computerscore++;
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
    //if (humanScore > computerScore)
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


// ALTERNATIVE playRound() idea with more specific commentary:
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
