const grid = document.getElementById('grid');
const score = document.getElementById('score');
const timer = document.getElementById('timer');
let squares,
    mole,
    currentScore = 0,
    currentTimer = 60;

const columns = 3;
const rows = 3;

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
}

createGameBoard();

function randomSquare() {
    [...squares].map(square => {
        square.classList.remove('mole');
    });

    squares[Math.floor(Math.random() * squares.length)].classList.add('mole');
}

function moveMole() {
    let timerID = null;
    timerID = setInterval(randomSquare, 500)
}

moveMole()