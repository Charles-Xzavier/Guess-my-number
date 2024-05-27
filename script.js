let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 correct number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#22c376';
    document.querySelector('.number').style.width = '15rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💣 you lost the game');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing…');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '12rem';
});

//for medium level
let secretNumber2 = Math.trunc(Math.random() * 50) + 1;
let score2 = 10;
let highscore2 = 0;

document.querySelector('.mediumbox').addEventListener('click', function () {
  document.querySelector('.between').textContent = '(From 1 to 50)';
  document.querySelector('.score').textContent = 10;

  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when no input
    if (!guess) {
      displayMessage('⛔ No number!');

      //when player wins
    } else if (guess === secretNumber2) {
      displayMessage('🎉 correct number!');
      displayNumber(secretNumber2);
      document.querySelector('body').style.backgroundColor = '#22c376';
      document.querySelector('.number').style.width = '15rem';

      if (score2 > highscore2) {
        highscore2 = score2;
        document.querySelector('.highscore').textContent = highscore2;
      }

      //when guess is wrong
    } else if (guess !== secretNumber2) {
      if (score2 > 1) {
        displayMessage(guess > secretNumber2 ? '📈 Too high!' : '📉Too low!');
        score2--;
        displayScore(score2);
      } else {
        displayMessage('💣 you lost the game');
        displayScore(0);
      }
    }
  });

  document.querySelector('.again').addEventListener('click', function () {
    score2 = 10;
    secretNumber2 = Math.trunc(Math.random() * 40) + 1;

    displayMessage('Start guessing…');
    displayScore(score2);
    displayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '12rem';
  });
});

//for hard level
let secretNumber3 = Math.trunc(Math.random() * 100) + 1;
let score3 = 5;
let highscore3 = 0;

document.querySelector('.hardbox').addEventListener('click', function () {
  document.querySelector('.between').textContent = '(From 1 to 100)';
  document.querySelector('.score').textContent = 5;

  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when no input
    if (!guess) {
      displayMessage('⛔ No number!');

      //when player wins
    } else if (guess === secretNumber2) {
      displayMessage('🎉 correct number!');
      displayNumber(secretNumber3);
      document.querySelector('body').style.backgroundColor = '#22c376';
      document.querySelector('.number').style.width = '15rem';

      if (score3 > highscore3) {
        highscore3 = score3;
        document.querySelector('.highscore').textContent = highscore3;
      }

      //when guess is wrong
    } else if (guess !== secretNumber3) {
      if (score3 > 1) {
        displayMessage(guess > secretNumber3 ? '📈 Too high!' : '📉Too low!');
        score3--;
        displayScore(score3);
      } else {
        displayMessage('💣 you lost the game');
        displayScore(0);
      }
    }
  });

  document.querySelector('.again').addEventListener('click', function () {
    score3 = 5;
    secretNumber2 = Math.trunc(Math.random() * 100) + 1;

    displayMessage('Start guessing…');
    displayScore(score3);
    displayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '12rem';
  });
});
