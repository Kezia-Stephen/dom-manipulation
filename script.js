'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number !';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 17;

document.querySelector('.guess').value = 20;
*/

//Define the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//Event Listener - Handling click element
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no guess
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number ⛔️';
    displayMessage('No number ⛔️');
  }

  //When player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct number !';
    displayMessage('🎉 Correct number !');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When the guess is incorrect
  else if (guess !== secretNumber) {
    if (score > 1) {
      /*document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high 📈' : 'Too low 📉';*/
      score--;
      displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📉');
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game 😓';
      displayMessage('You lost the game 😓');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  //When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high 📈' : 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😓';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😓';
      document.querySelector('.score').textContent = 0;
    }
  }
    */
});

//Coding challenge #1
//Game rest functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
