let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let display = document.querySelector(".display");

let computerMove = "";
let result = "";
let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function handleComputerMove() {
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 3 / 3) {
    computerMove = "scissors";
  }
}

function playGame(userMove) {
  handleComputerMove();
  console.log(`computerMove is ${computerMove}`);
  console.log(`usermove is /images/${userMove}.png`);

  if (userMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
      score.ties++;
    } else if (computerMove === "paper") {
      result = "lose";
      score.losses++;
    } else if (computerMove === "scissors") {
      result = "win";
      score.wins++;
    }
  } else if (userMove === "paper") {
    if (computerMove === "rock") {
      result = "win";
      score.wins++;
    } else if (computerMove === "paper") {
      result = "tie";
      score.ties++;
    } else if (computerMove === "scissors") {
      result = "lose";
      score.losses++;
    }
  } else if (userMove === "scissors") {
    if (computerMove === "rock") {
      result = "lose";
      score.losses++;
    } else if (computerMove === "paper") {
      result = "win";
      score.wins++;
    } else if (computerMove === "scissors") {
      result = "tie";
      score.ties++;
    }
  }

  handleDisplay(userMove);

  console.log(result);
}

function handleDisplay(userMove) {
  display.innerHTML = `<div class ='result-moves-container'> <p>Your Move :</p> <img class = 'result-image' src = '/images/${userMove}.png' ></div> 

    <div class ='result-moves-container'> <p>Computer Move : </p> <img class = 'result-image' src = '/images/${computerMove}.png'>
    </div>

    <div ><img class = 'result-gif ' src= '/images/${result}.gif'></div>

    <h2>Your score is : Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}<h2>  
    `;
}
