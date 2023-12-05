let playerScore = 0;
let computerScore = 0;
const maxRounds = 5;
const rpsChoices = ['rock', 'paper', 'scissors'];

for (let i=1; i<=maxRounds; i++) {
  const getComputerChoice = rpsChoices[Math.floor(Math.random()*rpsChoices.length)];
  const getPlayerChoice = rpsChoices[Math.floor(Math.random()*rpsChoices.length)];

  function playRound(getPlayerChoice, getComputerChoice){
    if (getComputerChoice === getPlayerChoice) {
      return "It's a tie";
    } 
    
    else if ((getPlayerChoice == 'rock' && getComputerChoice == 'scissors') ||
               (getPlayerChoice == 'scissors' && getComputerChoice == 'paper') ||
               (getPlayerChoice == 'paper' && getComputerChoice == 'rock')){
        computerScore++;
        return "You lost this round!";
    } 
    
    else if ((getComputerChoice == 'rock' && getPlayerChoice == 'scissors') ||
               (getComputerChoice == 'scissors' && getPlayerChoice == 'paper') ||
               (getComputerChoice == 'paper' && getPlayerChoice == 'rock')){
        playerScore++;
        return "You won this round!";
    }
  };

  console.log(playRound(getPlayerChoice, getComputerChoice));
  console.log(getComputerChoice);
  console.log(getPlayerChoice);
  console.log("computer score: "+ computerScore);
  console.log("player score: "+ playerScore);
}

if (playerScore > computerScore) {
  console.log("Congratulations, you win!");
} else if (computerScore > playerScore) {
  console.log("Sorry, you lose.");
} else {
  console.log("It's a draw");
};