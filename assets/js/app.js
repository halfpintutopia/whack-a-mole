const grid = document.getElementById('grid');
const score = document.getElementById('score');
const timer = document.getElementById('timer');
const start = document.getElementById('start');
let squares,
    mole,
    currentScore = 0,
    currentTimer = 60;

const columns = 3;
const rows = 3;
const interval = 2000;

function createGameBoard() {
    let i = 0;
    while (i < (columns * rows)) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.dataset.id = i;
        grid.append(square);
        i++;
    }
    score.innerHTML = currentScore;
    timer.innerHTML = currentTimer;
    squares = document.querySelectorAll('.square');

    start.addEventListener('click', moveMole);
}

createGameBoard();

function hitMole() {
    console.log('mole hit', this.dataset.id)
    score.innerHTML = ++currentScore;
}

function randomSquare() {
    [...squares].map(square => {
        square.classList.remove('mole');
        square.removeEventListener('click', hitMole)
    });

    const square = squares[Math.floor(Math.random() * squares.length)];
    square.classList.add('mole');
    square.addEventListener('click', hitMole)
}

function moveMole() {
    let timerID = null;
    timerID = setInterval(randomSquare, interval);
}

