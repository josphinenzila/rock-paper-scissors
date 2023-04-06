/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let totalScore = { playerScore: 0, computerScore: 0 };

function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomChoice];
}

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let pScore = 0;
  let cScore = 0;
  if (playerChoice == computerChoice) {
    pScore = 0;
    cScore = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    pScore = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    pScore = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    pScore = 1;
  } else {
    cScore = 1;
  }

  return { pScore, cScore };
}
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(pScore, cScore, playerChoice, computerChoice) {
  // Hint: on a score of -1
  const playerScoreDiv = document.getElementById("player-score");
  const handsDiv = document.getElementById("hands");
  const resultDiv = document.getElementById("result");

  if (pScore > cScore) {
    resultDiv.innerText = "You Win";
  } else if (pScore == cScore) {
    resultDiv.innerText = "You Draw";
  } else if (pScore < cScore) {
    resultDiv.innerText = "You Lose";
  }

  playerScoreDiv.innerText = `Your score: ${pScore} Computer score: ${cScore}`;
  handsDiv.innerText = `🙇 ${playerChoice} vs 🤖 ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  let { pScore, cScore } = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += pScore;
  totalScore["computerScore"] += cScore;
  showResult(
    totalScore.playerScore,
    totalScore.computerScore,
    playerChoice,
    computerChoice
  );
}
// ** Make the RPS buttons actively listen for a click and do something once a click is detected **

function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsBtns = document.querySelectorAll(".rpsButton");

  rpsBtns.forEach((rpsBtn) => {
    rpsBtn.onclick = () => {
      onClickRPS(rpsBtn.value);
    };
  });

  let endGameDiv = document.getElementById("endGameButton");
  endGameDiv.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  totalScore = { playerScore: 0, computerScore: 0 };
  const playerScoreDiv = document.getElementById("player-score");
  const handsDiv = document.getElementById("hands");
  const resultDiv = document.getElementById("result");

  playerScoreDiv.innerText = "";
  handsDiv.innerText = "";
  resultDiv.innerText = "";
}

playGame();
