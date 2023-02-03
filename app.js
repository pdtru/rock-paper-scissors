// function for one round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!"

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors."

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock."

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock."

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper."

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper."

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors. "

    } else {
        return "Invalid choice. Please choose rock, paper or scissors."
    }
}

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 1; i < 6; i++) {
        const roundNumber = i;
        alert("Round " + roundNumber);
        // case-insensitive prompt for user
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        // variable that selects random value from an array
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        const result = playRound(playerSelection, computerSelection);
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        console.log(result);
        if (result.startsWith("You win!")) {
            playerScore++;
        } else if (result.startsWith("You lose!")) {
            computerScore++;
        }
        console.log("You score: " + playerScore + " Computer score: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("You won!")
    } else if (playerScore < computerScore) {
        console.log("You lost!")
    } else if (playerScore === computerScore) {
        console.log("Draw!")
    }
}

game();