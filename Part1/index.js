let arr = [];


function play(squareVal) {
    let player = document.getElementById('player');
    let element = document.getElementById(squareVal);
    let resetFlag = false;
    if (player.innerText === 'O' && element.innerText === '') {
        player.innerText = 'X';
        element.innerText = 'O';
        arr[squareVal] = 'O';
    }
    else if (player.innerText === 'X' && element.innerText === '') {
        player.innerText = 'O';
        element.innerText = 'X';
        arr[squareVal] = 'X';
    }

    console.log(arr);
    
    if (arr[0] !== undefined && arr[1] === arr[0] && arr[2] === arr[0]) {
        alert(`Player ${arr[0]} is the winner!`);
        resetFlag = true;
    }
    else if (arr[0] !== undefined && arr[3] === arr[0] && arr[6] === arr[0]) {
        alert(`Player ${arr[0]} is the winner!`);
        resetFlag = true;
    }
    else if (arr[0] !== undefined && arr[4] === arr[0] && arr[8] === arr[0]) {
        alert(`Player ${arr[0]} is the winner!`);
        resetFlag = true;
    }
    else if (arr[1] !== undefined && arr[4] === arr[1] && arr[7] === arr[1]) {
        alert(`Player ${arr[1]} is the winner!`);
        resetFlag = true;
    }
    else if (arr[2] !== undefined && arr[5] === arr[2] && arr[8] === arr[2]) {
        alert(`Player ${arr[2]} is the winner!`);
        resetFlag = true;
    }
    else if (arr[3] !== undefined && arr[4] === arr[3] && arr[5] === arr[3]) {
        alert(`Player ${arr[3]} is the winner!`);
        resetFlag = true;
    }
    else if (arr[6] !== undefined && arr[7] === arr[6] && arr[8] === arr[6]) {
        alert(`Player ${arr[6]} is the winner!`);
        resetFlag = true;
    }
    else if (arr[6] !== undefined && arr[4] === arr[6] && arr[2] === arr[6]) {
        alert(`Player ${arr[6]} is the winner!`);
        resetFlag = true;
    }

    if (resetFlag === true) {
        resetBoard();
    }
}

function resetBoard() {
    for (let i = 0; i < arr.length; i++) {
        let element = document.getElementById(i);
        element.innerText = '';
    }
    arr.splice(0, 9);
    console.log(arr);
}

