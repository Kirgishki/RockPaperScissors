var humanScore = 0;
var cpuScore = 0;
var round = 1;

const buttons = document.querySelector("#buttonsContainer");

buttons.addEventListener("click", (e)=>{
    playGame(e.target.innerText.toLowerCase(), getComputerChoice());
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
    const resultPara = document.querySelector("#results");
    resultPara.innerText =  "You choose " + humanChoice + "\nCpu choose " + computerChoice;

    if(humanChoice === computerChoice){
        resultPara.innerText += '\nBoth players chose ' + humanChoice + ". Round is TIE";
        return 0;
    }else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        resultPara.innerText += '\n' + humanChoice + ' beats ' + computerChoice + '. YOU won the round!!!';
        return 1;
    }else{
        resultPara.innerText += '\n' + computerChoice + ' beats ' + humanChoice + '. CPU won the round!!!';
        return 2;
    }
}

function playGame (humanChoice){
    if(round < 6){
        const humanSelection = humanChoice;
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
    }
    if(round == 5){
        const finalScorePara = document.querySelector("#finalScore");
        finalScorePara.innerText = 'Final score:\nYOU: ' + humanScore + '\nCPU: ' + cpuScore;

        const resetButton = document.createElement('button');
        resetButton.innerText = 'New match';
        
        finalScorePara.parentNode.appendChild(resetButton);

        resetButton.addEventListener('click', ()=>{
            document.querySelector("#results").innerText = "";
            finalScorePara.innerText = "";
            resetButton.remove();

            humanScore = 0;
            cpuScore = 0;
            round = 1;
        });
    }
    round ++;
}

