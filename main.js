var humanScore = 0;
var computerScore = 0;

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

function playRound (humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log('Both players chose ' + humanChoice + ". Round is TIE");
    }else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        console.log(humanChoice + ' beats ' + computerChoice + '. YOU are the winner!!!');
        humanScore++;
    }else{
        console.log(computerChoice + ' beats ' + humanChoice + '. CPU is the winner!!!');
        computerScore++;
    }
}