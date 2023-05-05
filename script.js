// const computerSelection = getComputerChoice();
// const playerSelection = prompt('Enter: Rock, Paper, or Scissors', '').toLowerCase();
// let playerScore = 0;
// let computerScore = 0;

// function getComputerChoice(){
//     let choice = ['rock', 'paper', 'scissors'];
//     let randomNum = Math.floor(Math.random() * choice.length);
//     let randomChoice = choice[randomNum];
//     return randomChoice;
// };

// function playRound(computerSelection, playerSelection){
//     return computerSelection === playerSelection ? 'Its a tie' : 
//         computerSelection === 'rock' && playerSelection === 'paper' ? playerWin() :
//         computerSelection === 'rock' && playerSelection === 'scissors' ? computerWin():
//         computerSelection === 'paper' && playerSelection === 'rock' ? computerWin():
//         computerSelection === 'paper' && playerSelection === 'scissors' ? playerWin():
//         computerSelection === 'scissors' && playerSelection === 'rock' ? playerWin():
//         computerSelection === 'scissors' && playerSelection === 'paper' ? computerWin() : '';
// };

// function playerWin(){
//     playerScore++;
//     console.log(playerScore);
//     playerSelection;
// };
// function computerWin(){
//     computerScore++;
//     console.log(computerScore);
//     playerSelection;
// }

// function game(){
//     while (playerScore + computerScore <= 5) {
//         playRound();
//     }
// };


// console.log(playRound(computerSelection, playerSelection));
