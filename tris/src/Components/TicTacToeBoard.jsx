import "./TicTacToeBoard.css";
import Cell from "./Cell";
import { useState, useEffect } from "react";
import RestartButton from "./RestartButton";

function TicTacToeBoard() {
  const [board, setBoard] = useState(new Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    if (!board.includes(null)) {
      setGameFinished(true);
      setDraw(true);
    } else {
      const horizontal = [0, 3, 6].map((i) => {
        return [i, i + 1, i + 2];
      });
      const vertical = [0, 1, 2].map((i) => {
        return [i, i + 3, i + 6];
      });
      const diagonal = [
        [0, 4, 8],
        [2, 4, 6],
      ];

      let winArrays = [].concat(horizontal).concat(vertical).concat(diagonal);
      let winner = winArrays.some((indices) => {
        return (
          board[indices[0]] == currentPlayer &&
          board[indices[1]] == currentPlayer &&
          board[indices[2]] == currentPlayer
        );
      });
      setGameFinished(winner);
      if (!winner) {
        let newPlayer = currentPlayer === "O" ? "X" : "O";
        setCurrentPlayer(newPlayer);
      }
    }
  }, [board]);

  let handleCellClick = (i) => {
    if (!gameFinished) {
      updateBoard(i);
    }
  };

  let updateBoard = (index) => {
    setBoard((board) =>
      board.map((cell, i) => {
        return i === index ? currentPlayer : cell;
      })
    );
  };

  let displayCurrentEvent = () => {
    if (draw) {
      return (
        <h3>
          <span className="player-X">X</span>
          <span className="player-O">O</span> DRAW!
        </h3>
      );
    } else if (gameFinished) {
      return (
        <h3>
          <span className={"player-" + currentPlayer}>{currentPlayer}</span>{" "}
          WINS!
        </h3>
      );
    } else {
      return (
        <h3>
          <span className={"player-" + currentPlayer}>{currentPlayer}</span>'S
          TURN
        </h3>
      );
    }
  };

  let restartGame = () => {
    setDraw(false);
    setGameFinished(false);
    setBoard(new Array(9).fill(null));
    setCurrentPlayer("O");
  };

  return (
    <div id="game-container">
      {displayCurrentEvent()}
      <div id="board">
        {board.map((value, i) => {
          return (
            <Cell
              gameFinished={gameFinished}
              callBack={handleCellClick}
              key={"cell" + i}
              cellIndex={i}
              value={value}
            />
          );
        })}
      </div>
      <RestartButton restartGame={restartGame} />
    </div>
  );
}

export default TicTacToeBoard;
