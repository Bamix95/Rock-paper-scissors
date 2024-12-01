let score = {
  playerScore: 0,
  computerScore: 0,
};
let Choices = document.querySelectorAll(".choice");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modalContent");
let restartBtn = document.querySelector(".restart");
let playerScoretext = document.querySelector(".playScore");
let computerScoretext = document.querySelector(".computerScore");

function handlePlay(e) {
  let playerChoice = e.target.id;
  let computerChoice = handleComputerChoice();
  let result = handleWinDraw(playerChoice, computerChoice);
  handleModalContent(playerChoice, computerChoice, result);
  handleScoreUpdate(result);
  modal.classList.add("show");
  playerScoretext.textContent = score.playerScore;
  computerScoretext.textContent = score.computerScore;
}
function handleComputerChoice() {
  const randomChoice = Math.floor(Math.random() * Choices.length);
  return Array.from(Choices)[randomChoice].id.toLowerCase();
}
function handleWinDraw(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "You Lose!!!";
    } else {
      return "You Win!!!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissor") {
      return "You Lose!!!";
    } else {
      return "You Win!!!";
    }
  } else if (playerChoice === "scissor") {
    if (computerChoice === "rock") {
      return "You Lose!!!";
    } else {
      return "You Win!!!";
    }
  }
}

function handleModalContent(playerChoice, computerChoice, result) {
  modalContent.innerHTML = `
  <p>Player picked: ${playerChoice}</p>
  <p>Computer picked: ${computerChoice}</p>
   <h2>${result}</h2>
   `;
}

function handleScoreUpdate(result) {
  if (result === "You Win!!!") {
    score.playerScore++;
  } else if (result === "You Lose!!!") {
    score.computerScore++;
  }
}

function handleRestart() {
  score.playerScore = 0;
  score.computerScore = 0;
  playerScoretext.textContent = score.playerScore;
  computerScoretext.textContent = score.computerScore;
}

Choices.forEach((choice) => choice.addEventListener("click", handlePlay));

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
restartBtn.addEventListener("click", handleRestart);
