# Knight's Tour Problem Solver 🛡️🏰

A project that implements a function called `knightMoves` that solves the Knight's Tour problem using either Depth-First Search (DFS) or Breadth-First Search (BFS) algorithms.

## Problem Description

The Knight's Tour is a classic problem in chess where the objective is to find a sequence of moves for a knight to visit each square on a chessboard exactly once. In our case, we are given a standard 8x8 chessboard and two coordinates representing the starting and ending squares. The knight moves in an L-shape pattern, either two steps in one direction and one step perpendicular, or one step in one direction and two steps perpendicular.

## Project Requirements

To complete this project, I had to:

1. Implement the `knightMoves` function.
2. Choose an appropriate data structure to represent the chessboard and knight's movements.
3. Implement either Depth-First Search (DFS) or Breadth-First Search (BFS) algorithm to find the shortest path.
4. Ensure that the chosen algorithm considers the rules of the chessboard and knight's movements.
5. Output the shortest path from the starting square to the ending square.

## How to Run

To use the `knightMoves` function:

```js
import knightMoves from "./knightMoves.js"

// Example usage:
console.log(`${JSON.stringify(knightMoves([3, 3], [4, 3]))}`);
```

## Example Outputs

Here are some example outputs of the `knightMoves` function:

- `knightMoves([0,0],[1,2])` returns `You made it 1 moves! Here's your path : [1,2]`.
- `knightMoves([0,0],[3,3])` could return `You made it 2 moves! Here's your path : [2,1],[3,3]`.
- `knightMoves([3,3],[0,0])` could return `You made it 2 moves! Here's your path : [1,2],[0,0]`.
