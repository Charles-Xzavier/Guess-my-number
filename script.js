let secretNumber;
let score;
let currentLevel = 'Easy';

let highscoreEasy = 0;
let highscoreMedium = 0;
let highscoreHard = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayHighscore = function (level) {
  if (level === 'Easy') {
    document.querySelector('.highscore').textContent = highscoreEasy;
  } else if (level === 'Medium') {
    document.querySelector('.highscore').textContent = highscoreMedium;
  } else if (level === 'Hard') {
    document.querySelector('.highscore').textContent = highscoreHard;
  }
};

//refresh
const initGame = function (level) {
  if (level === 'Easy') {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.between').textContent = '(From 1 to 20)';
  } else if (level === 'Medium') {
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    score = 10;
    document.querySelector('.between').textContent = '(From 1 to 50)';
  } else if (level === 'Hard') {
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    score = 5;
    document.querySelector('.between').textContent = '(From 1 to 100)';
  }

  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing…');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '12rem';
  displayHighscore(level);
};

//To check the guess
const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no guess
  if (!guess) {
    displayMessage('⛔ No number!');

    //when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#22c376';
    document.querySelector('.number').style.width = '15rem';

    if (currentLevel === 'Easy' && score > highscoreEasy) {
      highscoreEasy = score;
      document.querySelector('.highscore').textContent = highscoreEasy;
    } else if (currentLevel === 'Medium' && score > highscoreMedium) {
      highscoreMedium = score;
      document.querySelector('.highscore').textContent = highscoreMedium;
    } else if (currentLevel === 'Hard' && score > highscoreHard) {
      highscoreHard = score;
      document.querySelector('.highscore').textContent = highscoreHard;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💣 You lost the game');
      displayScore(0);
    }
  }
};

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', function () {
  initGame(currentLevel);
});

document.querySelector('.easybox').addEventListener('click', function () {
  currentLevel = 'Easy';
  initGame(currentLevel);
});

document.querySelector('.mediumbox').addEventListener('click', function () {
  currentLevel = 'Medium';
  initGame(currentLevel);
});

document.querySelector('.hardbox').addEventListener('click', function () {
  currentLevel = 'Hard';
  initGame(currentLevel);
});

// Initialize the game in easy mode by default
initGame(currentLevel);
