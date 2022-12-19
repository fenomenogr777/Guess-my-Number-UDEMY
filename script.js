'use strict';

const clickButton = document.querySelector('.check');
const userNumber = document.querySelector('.guess');
const message = document.querySelector('.message');
const numWin = document.querySelector('.number');
const resetGame = document.querySelector('.again');
const soundWin = new Audio('Sounds/win.mp3');
soundWin.volume = 0.05;
const soundLose = new Audio('Sounds/lose.wav');
soundLose.volume = 0.5;
let score = document.querySelector('.score');
let scoreChange = Number((score.textContent = '5'));
let highscore = document.querySelector('.highscore');
let secretNumber = Math.trunc(Math.random() * 20 + 1);

console.log(secretNumber);

// ΟΤΑΝ ΚΑΝΕΙΣ ΚΛΙΚ "ΜΑΝΤΕΨΕ"
clickButton.addEventListener('click', function () {
  const guess = Number(userNumber.value);

  // ΟΤΑΝ ΤΟ ΝΟΥΜΕΡΟ ΔΝ ΕΙΝΑΙ ΑΠΟΔΕΚΤΟ
  if (guess < 1 || guess > 20) {
    message.textContent = `Βάλε ενα νούμερο απο 1-20`;

    // ΟΤΑΝ ΒΡΙΣΚΕΙΣ ΤΟ ΝΟΥΜΕΡΟ
  } else if (guess === secretNumber) {
    clickButton.style.display = 'none';
    message.textContent = 'Μπράβο βρήκες τον αριθμό!!!';
    soundWin.play();
    numWin.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    if (Number(highscore.textContent) < scoreChange)
      highscore.textContent = scoreChange;
  }

  // ΟΤΑΝ ΕΙΝΑΙ ΜΙΚΡΟΤΕΡΟ Η ΜΕΓΑΛΥΤΕΡΟ Τ ΝΟΥΜΕΡΟ
  else if (guess !== secretNumber) {
    message.textContent =
      guess > secretNumber
        ? 'Πολύ Ψηλά,βάλε μικρότερο αριθμό'
        : 'Πολύ Χαμηλά,βάλε μεγαλύτερο αριθμό';
    scoreChange--;
    score.textContent = scoreChange;
  }

  // OTAN XANEIS
  if (scoreChange < 1) {
    numWin.textContent = 'Έχασες';
    numWin.style.width = '50%';
    message.textContent = 'Προσπάθησε ξανά';
    document.body.style.backgroundColor = 'red';
    userNumber.style.display = 'none';
    clickButton.style.display = 'none';
    soundLose.play();
  }
});

// ΚΑΝΕΙ RESET ΤΟ GAME
resetGame.addEventListener('click', function () {
  score.textContent = '5';
  message.textContent = 'Aρχίστε να μαντεύετε...';
  document.body.style.backgroundColor = '#222';
  userNumber.style.display = 'block';
  clickButton.style.display = 'block';
  numWin.textContent = '?';
  userNumber.value = '';
  scoreChange = 5;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  soundWin.pause();
  soundWin.currentTime = 0;
  soundLose.pause();
  soundLose.currentTime = 0;
  numWin.style.width = '15rem';
});
