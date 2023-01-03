class Gameboard {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const board = [];
    for (let i = 0; i < 64; i++) {
      board.push([]);
    }
    return board;
  }

  indexLookUp(orign) {
    let index = 0;
    for (let x = 0; x < 8; ) {
      for (let y = 0; y < 8; y++) {
        if (`${x},${y}` === orign.join(',')) {
          return index;
        }
        index++;
      }
      x++;
    }

    return index - 1;
  }
}

module.exports = Gameboard;
