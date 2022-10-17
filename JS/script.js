let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice = {Value: ""};

let playerChoiceInt = 0;
let computerChoiceInt = 0;

const playerScoreText = document.querySelector("#player-score");
playerScoreText.textContent = `Player score: ${playerScore}`;

const computerScoreText = document.querySelector("#computer-score");
computerScoreText.textContent = `Computer score: ${computerScore}`;

const outputText = document.querySelector("#output");
outputText.textContent = "May the best wins!";

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => button.addEventListener('click', () => {
    playerChoice = button.id;
    if (playerChoice === 'Rock') {
        playerChoiceInt = 0;
    } else if (playerChoice === 'Paper') {
        playerChoiceInt = 1;
    } else if (playerChoice === 'Scissors') {
        playerChoiceInt = 2;
    }
    computerChoiceInt = getComputerChoice();
    playGame(playerChoice, computerChoice);
}));


function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        computerChoice.Value = "Rock";
    } else if (choiceNumber === 1) {
        computerChoice.Value = "Paper";
    } else if (choiceNumber === 2) {
        computerChoice.Value = "Scissors";
    }

    return choiceNumber;
}

function playRound() {
    let win_array = [[0, 2, 1], 
                     [1, 0, 2], 
                     [2, 1, 0]];
    let result = win_array[playerChoiceInt][computerChoiceInt];
    if (result == 0){
        output.textContent = `Its a tie! You chose ${playerChoice} and The computer chose ${computerChoice.Value}`;
    } else if (result == 1){
        output.textContent = `You won! You chose ${playerChoice} and The computer chose ${computerChoice.Value}`;
        playerScore++;
    } else if (result == 2){
        output.textContent = `You lost! You chose ${playerChoice} and The computer chose ${computerChoice.Value}`;
        computerScore++;
    } else {
        output.textContent = 'invalid';
    }
}

function playGame(playerChoice, computerChoice) {
    playRound();
    playerScoreText.textContent = `Player score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    if (playerScore === 5) {
        output.textContent = "You Won the Game! Congrats.";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }

    if (computerScore === 5) {
        output.textContent = "You lose! Better luck next time.";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
}

