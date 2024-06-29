function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice  = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter Rock, Paper or Scissors").toLowerCase();

    switch (humanChoice) {
        case '1':
            return 'rock';
        case '2':
            return 'paper';
        case '3':
            return 'scissors';
        case 'rock':
        case 'paper':
        case 'scissors':
            return humanChoice;

        default:
            alert("Wrong value!");
            return getHumanChoice();
    }
}
