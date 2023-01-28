const grid = document.getElementById('grid');
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
}

createGameBoard();