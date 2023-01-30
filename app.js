const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() { // function that selects random element in an array
    return choices[Math.floor(Math.random() * choices.length)];
}
