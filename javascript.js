function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else if (random == 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  const userInput = prompt("Type one of these rock/paper/scissors");
  return userInput;
}

function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock") {
      console.log("Draw!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore = computerScore + 1;
      console.log("Computer score is:" + " " + computerScore);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You won! Rock beats scissors");
      humanScore = humanScore + 1;
      console.log("Human score is:" + " " + humanScore);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
      console.log("Draw!");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You won! Paper beats rock");
      humanScore = humanScore + 1;
      console.log("Human score is:" + " " + humanScore);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats paper");
      computerScore = computerScore + 1;
      console.log("Computer score is:" + " " + computerScore);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
      console.log("Draw!");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! Rock beats scissors");
      computerScore = computerScore + 1;
      console.log("Computer score is:" + " " + computerScore);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You won! Scissors beats rock");
      humanScore = humanScore + 1;
      console.log("Human score is:" + " " + humanScore);
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(`Human score is: ${humanScore}, Computer score is: ${computerScore}`);
}

playGame();