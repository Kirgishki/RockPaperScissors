var humanScore = 0;
var computerScore = 0;

const buttons = document.querySelector("#buttonsContainer");

buttons.addEventListener("click", (e)=>{
    playRound(e.target.innerText, getComputerChoice());
});

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
    console.log("You choose " + humanChoice);
    console.log("Cpu choose " + computerChoice);

    if(humanChoice === computerChoice){
        console.log('Both players chose ' + humanChoice + ". Round is TIE");
        return 0;
    }else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        console.log(humanChoice + ' beats ' + computerChoice + '. YOU won the round!!!');
        return 1;
    }else{
        console.log(computerChoice + ' beats ' + humanChoice + '. CPU won the round!!!');
        return 2;
    }
}

function playGame (){
    let round = 1;
    let humanScore = 0;
    let cpuScore = 0;

    while(round < 6){
        const humanSelection = getHumanChoice();
        const cpuSelection = getComputerChoice();
        let roundResult;
       
        roundResult = playRound(humanSelection, cpuSelection);

        switch (roundResult) {
            case 1:
                humanScore++;
                break;
            case 2:
                cpuScore++;
                break;
            default:
                break;
        }
        round ++;
    }

    console.log('Final score:\nYOU: ' + humanScore + '\nCPU: ' + cpuScore);
}
