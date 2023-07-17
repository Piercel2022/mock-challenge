function generateChessboard(size){
    if(!Number.isInteger(size) || size <= 0){
        throw new Error('Size must be a positive integer.');
    }
    let board = [];

    for (let y = 0; y < size; y++) {
        let row = [];
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 === 0) {
                row.push(" ");
            } else {
                row.push("#");
            }
        }
        board.push(row.join(''));
    }
    return board.join('\n');
}
console.log(generateChessboard(8));