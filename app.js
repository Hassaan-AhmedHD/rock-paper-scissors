const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

//Declaring Global Variables
let userChoice;
let result;
let computerChoice;

let userScore = 0;
let computerScore = 0;

// Use forEach loop to add an event listener to each button
possibleChoices.forEach((button) => {
  button.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    //Calling computerChoice Function
    computerChoice = computerChoiceGenerator();
    computerChoiceDisplay.innerHTML = computerChoice;

    let result = getResult();

    resultDisplay.innerHTML = result;
  });
});

function computerChoiceGenerator() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult() {
  
  determineWinner()
  if (computerChoice === userChoice) {
    result = "its a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lose";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lose";
  }
  
  determineWinner(userChoice , computerChoice,result)
  
  return result;
  
}




// Inside the function that determines the winner, update the scores accordingly
function determineWinner(userChoice, computerChoice,  result) {
  console.log(`${userChoice} ${computerChoice} ${result}`);
  
  // ... determine the winner
  if (result === 'you win') {
    userScore++;
    document.getElementById('user-score').textContent = userScore;
  } else if (result === 'you lose') {
    computerScore++;
    document.getElementById('computer-score').textContent = computerScore;
  }
}