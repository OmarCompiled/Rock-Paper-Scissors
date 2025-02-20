const display   = document.querySelector("#display");
const buttons   = document.querySelectorAll("input");
const indicator = document.querySelector("#indicator");

let roundCount    = 0;
let humanScore    = 0;
let computerScore = 0;

display.textContent = "Press any button to start!";

let playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice) {
        display.textContent = "Draw!";
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        display.textContent = "You won this round!";
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        display.textContent = "You won this round!";
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        display.textContent = "You won this round!";
    } else {
        computerScore++;
        display.textContent = "I won this round!";
    }
    roundCount++;

    if(roundCount === 5) {
        let winner;
        if(humanScore > computerScore) {
            winner = "You";
        } else if(humanScore < computerScore) {
            winner = "I";
        } else {
            winner = "Nobody";
        }
        display.style.fontSize = "18px";
        display.innerHTML += `<br>You scored ${humanScore} & I scored ${computerScore},
        <br>${winner} won the game!
        <br> Press any button to play again.`;
        buttons.forEach(button => button.disabled = true);             
    }
}

let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

buttons.forEach(button => button.addEventListener("click", () => {
    playRound(button.value, getComputerChoice());
    indicator.textContent = `${roundCount}/5`;
}));

