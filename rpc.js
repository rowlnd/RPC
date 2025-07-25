let max = 3;
let hscore = 0;
let cscore = 0;

function getComputerChoice(max) {
    let randomNumber = Math.floor(Math.random() * max);
    if (randomNumber == 0) return "rock";
    else if (randomNumber == 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Choose your sign!");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Human wins.");
        hscore++;
    }
    else {
        console.log("Computer wins.");
        cscore++;
    }
}

function playGame() {
    for (let round = 0; round < 5; round++) {
        let human = getHumanChoice();
        let computer = getComputerChoice(max);
        playRound(human, computer);
    }

    console.log("Game Over");
    if (hscore > cscore) {
      console.log("Human win the game.");
    } else if (cscore > hscore) {
      console.log("Computer wins the game.");
    } else {
      console.log("Its a tie!");
    }
}

playGame(); 
