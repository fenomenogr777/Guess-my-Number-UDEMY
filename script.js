'use strict';
const secretNumber = Math.trunc(Math.random() * 10 + 1);
let score = 5;

//message
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//Again Function-Refresh page
document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});

//Input data--------------------------------------------------
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Invalid!!!Put a number 1-20.');

    //Winner---------------------------------------------
  } else if (guess === secretNumber) {
    displayMessage('Winner!!!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    let highScore = 0;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //Too High and Too  combined
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('Εχασες , εισαι τερμα ασχετος!!!');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
  }
});

//Too High--------------------------------------------
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent =
//       'Εχασες , εισαι τερμα ασχετος!!!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = 'red';
//     document.querySelector('.number').style.width = '30rem';
//   }
// }

// //Too Low--------------------------------------------------
// else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent =
//       'Εχασες ,εισαι τερμα ασχετος!!!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = 'red';
//     document.querySelector('.number').style.width = '30rem';
//   }

//HighScore
