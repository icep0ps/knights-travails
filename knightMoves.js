const Knight = require('./helpers/knight.js');
const Gameboard = require('./helpers/gameBoard.js');

const chessBoard = new Gameboard();
const knight = new Knight(chessBoard);

const knightMoves = (orign, destination) => {
  const index = chessBoard.indexLookUp(orign);
  const sources = chessBoard.board[index].traverse();
  const paths = [];
  sources.map((source) => {
    paths.push(knight.depth(source, destination));
  });

  const shortestPath = knight.returnShortesPaths(paths)[0];

  return `You made it ${shortestPath.length} moves! Here's your path : ${shortestPath.map(
    (route) => {
      return `[${route}]`;
    }
  )}`;
};

console.log(`${JSON.stringify(knightMoves([3, 3], [0, 0]))}`);
module.exports = knightMoves;
