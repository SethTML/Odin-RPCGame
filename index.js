function getComputerChoice(){
    let val = (Math.random() * 3) + 1;
    val = Math.floor(val);
    let raturn;
    if(val == 1){
        raturn = "Rock";
    }
    else if(val == 2){
        raturn = "Paper";
    }
    else if (val == 3){
        raturn = "Scissor";
    }

    return raturn;
}

function PlayRound(PChoice,CPChoice){
    let PlayerChoice = PChoice.toLowerCase();
    let CPUChoice = CPChoice.toLowerCase();
    let raturn = "incorrect spelling?";
    if (PlayerChoice == CPUChoice){
        return ("Game Tied!");
    }
    if (PlayerChoice == "rock"){
        if(CPUChoice == "paper"){
            raturn = ("You Lose! Paper beats Rock");
        }
        if (CPUChoice == "scissor"){
            raturn = ("You Win! Rock beats Scissor");
        }
    }
    if (PlayerChoice == "paper"){
        if(CPUChoice == "scissor"){
            raturn = ("You Lose! Scissor beats Paper");
        }
        if (CPUChoice == "rock"){
            raturn = ("You Win! Paper beats Rock");
        }
    }
    if (PlayerChoice == "scissor"){
        if(CPUChoice == "rock"){
            raturn = ("You Lose! Rock beats Scissor");
        }
        if (CPUChoice == "paper"){
            raturn = ("You Win! Scissor beats Paper");
        }
    }
    return raturn;
}

function Game(){
    for(let i = 0; i < 5;i++){
        let pChoice = PlayerChoice();
        let cChoice = getComputerChoice();

        console.log(PlayRound(pChoice,cChoice));
    }
}

function PlayerChoice(){
    let pChoice = window.prompt("Rock,Paper, or Scissor?");
    return pChoice;
}

let StartButton = document.getElementsByClassName("RPCButton")[0];
StartButton.onclick = function(){
    Game();
}