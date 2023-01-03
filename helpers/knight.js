const LinkedList = require('./linkedList.js');

class Knight {
  constructor(chessBoard) {
    this.chessBoard = chessBoard;
    this.createMoves();
  }

  createMoves() {
    let index = 0;
    for (let x = 0; x < 8; ) {
      for (let y = 0; y < 8; y++) {
        const topright = [x + 2, y + 1];
        const topleft = [x + 2, y - 1];
        const bottomright = [x - 2, y + 1];
        const bottomleft = [x - 2, y - 1];
        const topmidright = [x + 1, y + 2];
        const topmidleft = [x + 1, y - 2];
        const bottommidright = [x - 1, y + 2];
        const bottommidleft = [x - 1, y - 2];

        const coordinates = [
          topright,
          topleft,
          bottomright,
          bottomleft,
          topmidright,
          topmidleft,
          bottommidright,
          bottommidleft,
        ];

        const movesNotGoingOffTheBoard = (coordinate) => {
          if (
            coordinate[0] < 8 &&
            coordinate[1] < 8 &&
            coordinate[0] > -1 &&
            coordinate[1] > -1
          )
            return coordinate;
        };

        const possibleMoves = coordinates.filter((coordinate) =>
          movesNotGoingOffTheBoard(coordinate)
        );
        const linkedList = new LinkedList();
        for (let move of possibleMoves) {
          const indexedMove = move.join(',');
          linkedList.append(indexedMove);
        }

        this.chessBoard.board[index] = linkedList;
        index++;
      }
      x++;
    }
  }

  depth(source, destination) {
    let origin = source;
    const explored = [];
    const queue = [
      { origin: origin, node: source, distance: 1, moves: [[origin]] },
    ];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.node === destination.join(',')) return current;

      if (origin !== current.origin) {
        current.moves.push([origin]);
        origin = current.origin;
      }
      const index = this.chessBoard.indexLookUp([current.node]);
      explored.push(current.node);
      const possibleMoves = this.chessBoard.board[index].traverse();
      possibleMoves.map((node) => {
        if (explored.includes(node)) return;
        queue.push({
          origin: current.node,
          node: node,
          distance: current.distance + 1,
          moves: [...current.moves, [node]],
        });
      });
    }
  }

  returnShortesPaths(routes) {
    const distances = routes.map((distance) => {
      return distance.distance;
    });

    const routeWithshortestDistance = Math.min.apply(null, distances);

    const shortRoutes = routes.filter((path) => {
      return path.distance === routeWithshortestDistance;
    });

    return shortRoutes.map((move) => {
      return move.moves;
    });
  }
}
module.exports = Knight;
