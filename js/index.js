"use strict";
var output = document.getElementById("output");
var score = document.getElementById("score");
var startButton = document.querySelector(".start-button");
// var computerNumber;
var currentRound = 0;
var rounds;
var countRounds = document.getElementById("rounds");
var rock = document.getElementById("rock");
rock.addEventListener("click", function() {
  playerMove("rock");
});
var paper = document.getElementById("paper");
paper.addEventListener("click", function() {
  playerMove("paper");
});
var scissors = document.getElementById("scissors");
scissors.addEventListener("click", function() {
  playerMove("scissors");
});
function startGame() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}
var playerScore = 0;
var computerScore = 0;
// var playerNumber;

function playerMove(playerDecision) {
  currentRound++;
  countRounds = document.getElementById("rounds");
  countRounds.innerHTML =
    "Round number: " +
    currentRound +
    " End game when someone reach points: " +
    rounds;

  var computerDecision = Math.floor(Math.random() * 3 + 1);
  if (computerDecision == 1) {
    computerDecision = "rock";
  } else if (computerDecision == 2) {
    computerDecision = "paper";
  } else if (computerDecision == 3) {
    computerDecision = "scissors";
  }
  console.log(computerDecision);
  console.log(playerDecision);
  if (computerDecision == playerDecision) {
    output.innerHTML = "Draw";
  } else if (
    (computerDecision == "rock" && playerDecision == "paper") ||
    (computerDecision == "paper" && playerDecision == "scissors") ||
    (computerDecision == "scissors" && playerDecision == "rock")
  ) {
    output.innerHTML =
      "You Won, You had " +
      playerDecision +
      ", computer had " +
      computerDecision;
    playerScore++;
    score.innerHTML = playerScore + " : " + computerScore;
  } else if (
    (computerDecision == "rock" && playerDecision == "scissors") ||
    (computerDecision == "scissors" && playerDecision == "paper") ||
    (computerDecision == "paper" && playerDecision == "rock")
  ) {
    output.innerHTML =
      "Computer Won, You had " +
      playerDecision +
      ", computer had rock " +
      computerDecision;
    computerScore++;
    score.innerHTML = playerScore + " : " + computerScore;
  }

  if (rounds == playerScore) {
    var winner = "you";
  }
  if (rounds == computerScore) {
    var winner = "computer";
  }
  if (winner != null) {
    output.innerHTML = winner + " won the entire game";
    score.innerHTML = "";
    countRounds.innerHTML = "";
    playerScore = 0;
    computerScore = 0;
    winner = null;
  }
}

startButton.addEventListener("click", function() {
  rounds = window.prompt("How many rounds do you want to play?");
  if (isFinite(rounds) && rounds > 0) {
    currentRound = 0;
    playerScore = 0;
    computerScore = 0;

    countRounds.innerHTML =
      "Game started. You will win when you reach " + rounds + " points";
    startGame();
  }
});