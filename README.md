# rock-paper-scissors

## Introduction:
The rock-paper-scissors game is a simple game that involves two players, each choosing one of three possible options: rock, paper, or scissors. The game is usually played between two people, but it can also be played between a person and a computer. The game is based on the idea that rock beats scissors, scissors beat paper, and paper beats rock.

## Functions:

### computerChoiceGenerator(): 
This function generates a random choice for the computer using the Math.random() function. The function selects one of three possible choices: rock, paper, or scissors.

### getResult(): 
This function determines the winner of the game based on the choices made by the user and the computer. The function uses conditional statements to compare the choices and determine the winner.

### possibleChoices.forEach((button) => {...}): 
This function uses a forEach loop to add an event listener to each button. The event listener is triggered when the user clicks on one of the buttons. The function then calls the computerChoiceGenerator() function to generate a choice for the computer. The function then calls the getResult() function to determine the winner of the game.



## Conclusion:
The rock-paper-scissors game is a simple yet entertaining game that can be played between two people or between a person and a computer. This project demonstrates how HTML, CSS, and JavaScript can be used to create a functioning game that is easy to play and understand. The game is a great way to practice programming skills and experiment with different coding techniques.