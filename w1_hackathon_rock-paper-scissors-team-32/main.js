// Plan
// Task 1
// how many possible moves? DONE
// store variable for computer? DONE
// store variable for player with prompt? DONE
// compare variables - declare winner DONE
// sort random number for computer move DONE
// prevent loop firing again - this is a function! GOTO Task 2
// Way to update the score.  DONE
//get winner function -- find out what the score is. Then display score and declare a winner.
// Task 3 and 4 accidentally completed while doing tasks 1 and 2 because we are awesome
// Task 5 - game loop
// while loop DONE
// condition for loop DONE
// ask player how many times they want to play DONE
// keep score during those rounds PART DONE - scores are not added together?
// run getWinner after last round, then confirm keep/stop play DONE
// Task 6:
// Need to track rounds DONE
// Need to add number of wins, losses, draws 
// Display all that information after each round
// Task 7:
// create new prompt for player name DONE
// put it first DONE
// max character length of 10 DONE
// use name throughout game DONE

let playerName = prompt("What is your name? NOTE: 10 characters max!"); 
playerName = playerName.slice(0, 10);
console.log(playerName);

let rounds = 1 //prompt("How many rounds would you like to play?");
// check if this is text then reopen prompt

// While loop runs the game
while (rounds > 0) {
    game();
    rounds++;
    console.log(rounds)
}

let computerScore = 0;
let playerScore = 0;

// Function contains the game
function game() {
   
    // Match gives the computer a move
    function match() {
    const playerMove = prompt("Type 'rock', 'paper' or 'scissors'!");
    const computerPossibleMoves = ["rock", "paper", "scissors"];
    let computerMove = computerPossibleMoves[Math.floor(Math.random() * 3)];
    console.log("The computer move is: " + computerMove);
    console.log(playerName + "'s move is: " + playerMove)
    
    if (playerMove === computerMove) {
      console.log("Draw!");
          }

    //computer wins possibilities
    if (playerMove === "rock" && computerMove === "paper") {
      console.log("Computer Wins")
      computerScore++;
      playerScore--;
    } else if (playerMove === "paper" && computerMove === "scissors") {
      console.log("Computer Wins")    
      computerScore++;
      playerScore--;
    } else (playerMove === "scissors" && computerMove === "rock"); {
      console.log("Computer Wins")
      computerScore++;
      playerScore--;
    }
    //player wins possibilities
    if (computerMove === "rock" && playerMove === "paper"){
      console.log(playerName + " Wins!")      
      computerScore--;
      playerScore++;
    } else if (computerMove === "paper" && playerMove === "scissors"){
      console.log(playerName + " Wins!")        
      computerScore--;
      playerScore++;
    } else (computerMove === "scissors" && playerMove === "rock");{
      console.log(playerName + " Wins!")      
      computerScore--;
      playerScore++;
    }
    }
    match();


// getWinner compares moves and declares who wins the round
    function getWinner() {
      console.log("Computer Score is: " + computerScore);
      console.log(playerName + "'s Score is: " + playerScore);

      if (computerScore === playerScore) {
        alert("Its a draw!");
      } else if (computerScore > playerScore) {
        alert("Computer wins!");
      } else {
        alert("You win, " + playerName + "!");
      }
    }

    getWinner();


// finalScore in theory adds all round scores and declares who wins game
    function finalScore(){
  
        console.log("Final Computer Score is: " + computerScore);
        console.log(playerName +": Your final score is: " + playerScore);
       
        if (computerScore > playerScore) {
            let winner = "Computer";
            console.log("The winner is: " + winner + " with a score of: " + computerScore);
        } else if (computerScore < playerScore) {
            let winner = playerName;
            console.log("The winner is: " + winner + " with a score of: " + playerScore );
        } else {
            let winner = "It's a draw!";
            console.log("The winner is: " + winner + " You both scored:");
        }
    }
// continuePlaying checks if player wants to stop after each round
    let continuePlaying = confirm(playerName + ": do you want to keep playing?");
    if (continuePlaying === true) {

    } else {
        rounds = -1;
        finalScore();
        console.log(testVariable)
    }
    // getWinner();
  };
