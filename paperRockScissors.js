const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'||userInput === 'paper'||userInput === 'scissors'|| userInput === 'bomb'){
    return userInput;
  } else { console.log('Your input is Invalid');}
};

// Test User input

getUserChoice('paper');

//Computer input

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    break
    case 1:
    return 'paper';
    break
    case 2:
    return 'scissors';
  }
}

//Test computer input


//Determine winner

function determineWinner(userChoice,computerChoice){
  if (userChoice === computerChoice) {
    return console.log('The game is a tie!');
  } if(userChoice === 'rock') {
    if(computerChoice == 'paper'){
      return console.log('Computer Won!');} 
      else{return console.log('You won!');}
      }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors'){
        return console.log('The computer Won!')
      } else {return console.log('You won!');}
    } if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return console.log('The computer Won!');}
    }  if (userChoice === 'bomb') {
    return console.log(' BOOM You won!!!');} else {
    return console.log('You won!')
  }
}
//Testing game


//Game function
const playGame = () => {
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('The computer threw: '+ computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
}

playGame();

