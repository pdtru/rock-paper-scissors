const choices = ['rock', 'paper', 'scissors'];

// function that selects random element in an array
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// case-insensitive prompt for player
const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();

// function for one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "Rock beats scissors. You win!"

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "Paper beats rock. You lose!"

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "Paper beats rock. You win!"

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "Scissors beats paper. You lose!"

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "Scissors beats paper. You win!"

    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "Rock beats scissors. You lose!"

    } else {
        return "Invalid option. Please choose rock, paper or scissors."
    }
}

console.log("Player chose: " + playerSelection);
console.log("Computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
