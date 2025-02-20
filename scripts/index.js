const display   = document.querySelector("#display");
const buttons   = document.querySelectorAll("input");
const indicator = document.querySelector("#indicator");

let roundCount    = 0;
let humanScore    = 0;
let computerScore = 0;

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
        display.textContent = "The computer won this round!";
    }
    roundCount++;

    if(roundCount === 5) {
        let winner = humanScore === computerScore ? "Nobody" : humanScore > computerScore ? "You" : "I";
        display.style.fontSize = "18px";
        display.innerHTML = `You scored ${humanScore} & I scored ${computerScore},
        <br>${winner} won the game!
        <br> Press any button to play again.`;
        buttons.forEach(button => button.addEventListener("click", () => {
            
        }));
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

