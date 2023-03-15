let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const you_div = document.getElementById("you");
const cpu_div = document.getElementById("cpu");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function convertToWord(userChoice) {
    if (userChoice == "r") return "ROCK";
    if (userChoice == "p") return "PAPER";
    return "SCISSORS";
}

function changeCpuImage(computerChoice) {
    if (computerChoice == 'r') {
        cpu_div.src = "images/rock.png";
    } else if (computerChoice == 'p') {
        cpu_div.src = "images/paper.png";
    } else {
        cpu_div.src = "images/scissors.png";
    }
}

function changeUserImage(userChoice) {
    if (userChoice == 'r') {
        you_div.src = "images/rock.png";
    } else if (userChoice == 'p') {
        you_div.src = "images/paper.png";
    } else {
        you_div.src = "images/scissors.png";
    }
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} BEATS ${convertToWord(computerChoice)}. YOU WIN!`
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} BEATS ${convertToWord(userChoice)}. YOU LOSE!`
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = "DRAW!"
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    changeCpuImage(computerChoice);
    changeUserImage(userChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");

    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();