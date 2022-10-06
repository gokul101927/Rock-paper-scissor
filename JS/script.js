let playerScore = 0;
        let computerScore = 0;
        
        function getComputerChoice() {
            let choiceNumber = Math.floor((Math.random() * 3) + 1);
            if (choiceNumber === 1) {
                return "Rock";
            } else if (choiceNumber === 2) {
                return "Paper";
            } else {
                return "Scissors";
            }
        }

        function playRound(playerSelection, computerSelection) {
            let result = "";
            if (playerSelection === computerSelection) {
                result = "tie";
            }
            
            if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                        playerSelection === "Paper" && computerSelection === "Rock" ||
                        playerSelection === "Scissors" && computerSelection === "Paper") {
                playerScore++;
                result = "You win, " + playerSelection + " beats " + computerSelection;            
            }
            
            if (computerSelection === "Rock" && playerSelection === "Scissors" ||
                    computerSelection === "Paper" && playerSelection === "Rock" ||
                    computerSelection === "Scissors" && playerSelection === "Paper") {
                computerScore++;
                result = "You lose, " + computerSelection + " beats " + playerSelection;
            }
            
            return result;
        }

        function game() {
            for (let i = 0; i <= 5; i++) {
                let computerSelection = getComputerChoice();
                let playerSelection = prompt("Rock, paper or scissors?");
                console.log(playRound(playerSelection, computerSelection));
                console.log("Player: " + playerScore);
                console.log("Computer: " + computerScore);
            }

            if (computerScore > playerScore) {
                console.log("Computer beats you");
            } else if (playerScore > computerScore) {
                console.log("You beat the computer");
            } else {
                console.log("You both tied");
            }
        }

        game();