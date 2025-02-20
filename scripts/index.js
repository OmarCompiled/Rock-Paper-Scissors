const display = document.querySelector("#display");
const buttons = document.querySelectorAll("input");

let getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let humanScore = 0;
let computerScore = 0;


let playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice) {
        console.log("Draw!");
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You won this round!");
    } else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You won this round!");
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You won this round!");
    } else {
        computerScore++;
        console.log("The Computer won this round!");
    }
    return;
}

buttons.forEach(button => button.addEventListener("click", () => playRound(button.value, getComputerChoice())));

// const computerSelection = getComputerChoice();

// function playGame(humanSelection, computerSelection) {
//     let roundCount = 1;
//     playRound(humanSelection, computerSelection);
//     while(roundCount < 5) {
//         computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         roundCount++;
//     }
//     let winner = humanScore > computerScore ? "You" : humanScore === computerScore ? "Draw" : "The Computer";
//     console.log(`You won ${humanScore}/5 rounds!`);
//     console.log(winner === "Draw" ? "Draw, nobody won!" : `${winner} won the game!`);
// }

// playGame();