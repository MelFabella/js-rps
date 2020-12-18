let userChoice
let computerChoice
let result;
let randomNumber;

const displyaResult = document.getElementById('result');
const getComputerChoice = document.getElementById('compChoice');
const getUserChoice = document.getElementById('userChoice');

const playGame = document.querySelectorAll('.choices')

playGame.forEach(playGame => playGame.addEventListener('click', e => {
  userChoice = e.target.id;
  randomNumber = Math.floor(Math.random() * 3) + 1;
  getCompChoice();
  determineWinner();
  getComputerChoice.innerHTML = computerChoice;
  getUserChoice.innerHTML = userChoice;
  displyaResult.innerHTML = result;
}))

function getCompChoice()
{
  if(randomNumber == 1)
  {
    computerChoice = 'rock';
  }
  else if(randomNumber == 2)
  {
    computerChoice = 'paper';
  }
  else if(randomNumber == 3)
  {
    computerChoice = 'scissors';
  }
}

function determineWinner(){
if(userChoice == computerChoice)
{
  result = 'The game is a tie!';
}
else if (userChoice == 'scissors' && computerChoice == 'paper')
{
  result = 'You won!';
}
 else if (userChoice == 'paper' && computerChoice == 'rock')
{
  result = 'You won!';
}
 else if (userChoice == 'rock' && computerChoice == 'scissors')
{
  result = 'You won!';
}
 else if (userChoice == 'rock' && computerChoice == 'paper')
{
  result = 'The computer won!';
}
 else if (userChoice == 'paper' && computerChoice == 'scissors')
{
  result = 'The computer won!';
}
 else if (userChoice == 'scissors' && computerChoice == 'rock')
{
  result = 'The computer won!';
}
}