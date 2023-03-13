// function for one round of rock paper scissors
function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    // variable that selects random value from an array
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    playerSelection = playerSelection.toLowerCase();
    if (!choices.includes(playerSelection)) {
        return "Invalid choice. Please choose rock, paper or scissors."
    }
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win, ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose, ${computerSelection} beats ${playerSelection}!`;
    }
}

const buttons = document.querySelectorAll('#buttons button');
const result = document.querySelector('#result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const roundResult = playRound(playerSelection);
        result.textContent = roundResult;
    });
});


// const choices = ['rock', 'paper', 'scissors'];
// let playerScore = 0;
// let computerScore = 0;

// function that plays 5 rounds
// function game() {
    // for (let i = 1; i < 6; i++) {
    //     const roundNumber = i;
    //     alert("Round " + roundNumber);

        // case-insensitive prompt for user
        // const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

        // variable that selects random value from an array
        // const computerSelection = choices[Math.floor(Math.random() * choices.length)];

        // const result = playRound(playerSelection, computerSelection);
        // console.log("Player chose: " + playerSelection);
        // console.log("Computer chose: " + computerSelection);
        // console.log(result);
    //     if (result.startsWith("It's a tie!") || result.startsWith("Invalid choice.")) {
    //         i--;
    //         continue;
    //     } else if (result.startsWith("You win!")) {
    //         playerScore++;
    //     } else if (result.startsWith("You lose!")) {
    //         computerScore++;
    //     }
    //     console.log("Your score: " + playerScore + " Computer score: " + computerScore);
    //     if (playerScore === 3) {
    //         console.log("You won!");
    //         return;
    //     } else if (computerScore === 3) {
    //         console.log("You lost!");
    //         return;
    //     }
    // }

    // if (playerScore > computerScore) {
    //     console.log("You won!")
    // } else if (playerScore < computerScore) {
    //     console.log("You lost!")
    // } else if (playerScore === computerScore) {
    //     console.log("Draw!")
    // }
// }

// game();



