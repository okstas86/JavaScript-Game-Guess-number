'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' 🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function (messege) {
  document.querySelector('.message').textContent = messege;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is not input
  if (!guess) {
    displayMessage('⛔ No number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage(' 🎉 YOU WIN!!!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when gues is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 YOU LOST! GAME OWER!!!');

      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#B20D0D';
      document.querySelector('.number').style.width = '30rem';
    }
  }
});

//     //when guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         '💥 YOU LOST! GAME OWER!!!';

//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//       document.querySelector('.number').style.width = '30rem';
//     }

//     //when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent =
//         '💥 YOU LOST! GAME OWER!!!';

//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//       document.querySelector('.number').style.width = '30rem';
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
