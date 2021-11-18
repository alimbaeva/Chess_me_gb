const board = document.querySelector('.board');
const table = document.createElement('table');

const letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '];
const numbers = [' ', '1', '2', '3', '4', '5', '6', '7', '8', ' '];
const figureWhite = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'];
const figureBlack = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9818;', '&#9819;', '&#9821;', '&#9822;', '&#9820;', '8'];
const pawnsWhite = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '7'];
const pawnsBlack = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '2'];

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        if (i === 0 || i === 9 || j === 0 || j === 9) {
            let td = document.createElement('td');
            td.classList.add(`pink`);

            if (i === 0) {
                td.innerHTML = letters[j];
                td.classList.add(`rotate`);
            }
            if (i === 9) {
                td.innerHTML = letters[j];
            }
            if (j === 0) {
                td.innerHTML = numbers[i];
            }
            if (j === 9) {
                td.innerHTML = numbers[i];
                td.classList.add(`rotate`);
            }
            tr.append(td);
        } else {

            let td = document.createElement('td');
            td.classList.add('figure');
            td.classList.add(`id_${i}_${j}`);
            if (i === 1) {
                td.innerHTML = figureWhite[j];
            }
            if (i === 8) {
                td.innerHTML = figureBlack[j];
            }
            if (i === 2) {
                td.innerHTML = pawnsWhite[j];
            }
            if (i === 7) {
                td.innerHTML = pawnsBlack[j];
            }
            td.style.backgroundColor = (i + j) % 2 == 0 ? 'rgb(199, 99, 99)' : "white"
            tr.append(td);
        }
    }
    table.append(tr);
}

board.append(table);

