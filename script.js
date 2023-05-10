/*
Game Plan:

Big Picture:
    Generate a random choice for computer.
    Get choice from player.
    Make logic for comparing the computer and player choices.
    Update score count.
    Update pictures.
    At 5 games assign a winner and reset game.

Computer:
    Make array for computer choice.
    Generate random number for computer.
    Use random number to choose from array.
    Return randomly chosen choice.

Player:
    Add event listener to buttons and assign attribute value to variable.
    Pass value into logic function.

Logic:
    Ternary operator to compare comp and player choice.
    On
*/

let winScore = document.querySelector('.winScore');
let drawScore = document.querySelector('.drawScore');
let lossScore = document.querySelector('.lossScore');
let playerImages = document.querySelectorAll('.playerImages');
let computerImages = document.querySelectorAll('.computerImages');
let winningScreen = document.querySelector('.youWon');
let losingScreen = document.querySelector('.youLost');

let compChoice = () => {
    let compChoiceArray = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random() * compChoiceArray.length);
    return compChoiceArray[randomNum];
};

document.querySelectorAll('button').forEach(buttons => {
    buttons.addEventListener('click', () => {
        playerImages.forEach(image => {
            image.style.display = 'none';
        });
        computerImages.forEach(image => {
            image.style.display = 'none';
        });

        let playerChoice = buttons.textContent.toLocaleLowerCase();
        playGame(playerChoice, compChoice());
    })
});

function playGame(playerChoice, compChoice){

    playerChoice == 'rock' ? playerImages[0].style.display = 'block' : '';
    playerChoice == 'paper' ? playerImages[1].style.display = 'block' : '';
    playerChoice == 'scissors' ? playerImages[2].style.display = 'block' : '';

    compChoice == 'rock' ? computerImages[0].style.display = 'block' : '';
    compChoice == 'paper' ? computerImages[1].style.display = 'block' : '';
    compChoice == 'scissors' ? computerImages[2].style.display = 'block' : '';

    playerChoice == compChoice ? tieGame() : 
    (playerChoice == 'rock' && compChoice == 'scissors') ||
    (playerChoice == 'paper' && compChoice == 'rock') ||
    (playerChoice == 'scissors' && compChoice == 'paper') ? winGame() :
    (playerChoice == 'rock' && compChoice == 'paper') ||
    (playerChoice == 'paper' && compChoice == 'scissors') ||
    (playerChoice == 'scissors' && compChoice == 'rock') ? loseGame() : console.log('Broken');
};

function winGame(){
    winScore.textContent++;
    if(winScore.textContent == 5){
        youWin();
    };
    console.log('You Win');
};

function loseGame(){
    lossScore.textContent++;
    if(lossScore.textContent == 5){
        youLose();
    }
    console.log('You Lose');
};

function tieGame(){
    drawScore.textContent++;
    console.log('You Tied');
};

function youWin(){
    playerImages.forEach(image => {
        image.style.display = 'none';
    });
    computerImages.forEach(image => {
        image.style.display = 'none';
    });
    winningScreen.style.display = 'flex';
    setTimeout(gameReset, 2000);
};

function youLose(){
    playerImages.forEach(image => {
        image.style.display = 'none';
    });
    computerImages.forEach(image => {
        image.style.display = 'none';
    });
    losingScreen.style.display = 'flex';
    setTimeout(gameReset, 2000);
};

function gameReset(){
    document.location.reload();
};

