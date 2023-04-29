const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
//Declaring Global Variables
let userChoice
let result
let computerChoice

// Use forEach loop to add an event listener to each button
possibleChoices.forEach(button => {
  button.addEventListener('click', (e) => {
   
    userChoice =  e.target.id
    userChoiceDisplay.innerHTML = userChoice
    //Calling computerChoice Function
     computerChoice = computerChoiceGenerator()
    computerChoiceDisplay.innerHTML = computerChoice

    let result = getResult()

    resultDisplay.innerHTML = result


  });
});




 
function computerChoiceGenerator() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
  }



function getResult(){
    if(computerChoice===userChoice){
       result = "its a draw"
    }
    if(computerChoice==='rock' && userChoice ==='paper'){
       result = 'you win' 
    }
    if(computerChoice==='rock' && userChoice ==='scissors'){
        result = 'you lost' 
     }
     if(computerChoice==='paper' && userChoice ==='scissors'){
        result = 'you win' 
     }
     if(computerChoice==='paper' && userChoice ==='rock'){
        result = 'you lose' 
     }
     if(computerChoice==='scissors' && userChoice ==='rock'){
        result = 'you win' 
     }
     if(computerChoice==='scissors' && userChoice ==='paper'){
        result = 'you lose' 
     }  
     return result
}  

 
