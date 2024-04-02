let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userinput = document.querySelector('#guessField');

const GuessValue = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrhigh = document.querySelector('.lowOrHi');

const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateguess(guess);
  });
}
function validateguess(guess) {
  //is he/she given the valid number not(a,s,-1,200)
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a valid number');
  }else if (prevguess.includes(guess)) {
    alert('You have already guessed this number. Try a different one.');
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      displayguess(guess);
      displaymessage(`Game Over.Random number was${randomNumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess) {
  //check whether it is equal to or lower or higher to the value
  if (guess === randomNumber) {
    displaymessage(`You Guess The Right Value`);
    endgame();
  } else if (guess < randomNumber) {
    displaymessage(`Number is too low `);
  } else if (guess > randomNumber) {
    displaymessage(`Number is too high`);
  }
}
function displayguess(guess) {
  userinput.value = '';
  GuessValue.innerHTML += `${guess}, `;
  numguess++;
  remaining.innerHTML = `${11 - numguess} `;
}
function displaymessage(message) {
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}
function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
  startover.appendChild(p);
  playgame = false;
  console.log(startover);
  newgame();
}

function newgame() {
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevguess = [];
    numguess = 1;
    GuessValue.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}
