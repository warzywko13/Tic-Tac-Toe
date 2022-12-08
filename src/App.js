import React, { useState } from "react";
import Swal from "sweetalert2";

import ScoreBoard from "./components/ScoreBoard";
import Table from "./components/Table";

import "./App.css";

export const X = "x";
export const O = "o";
export const WIN_COORDINATE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const App = () => {
  const createTable = () => {
    const table = [];

    for (let i = 0; i < 9; i++) {
      table.push({
        id: i,
        value: "",
      });
    }

    return table;
  };

  const [table, setTable] = useState(createTable);
  const [player1, setPlayer1] = useState(true);
  const [playerScores, setPlayerScores] = useState({
    player1: 0,
    player2: 0,
  });

  const checkWinner = (updateBoard) => {
    WIN_COORDINATE.forEach((coordinate) => {
      const [x, y, z] = coordinate;

      if (
        updateBoard[x].value === "" ||
        updateBoard[y].value === "" ||
        updateBoard[z].value === ""
      )
        return;

      if (
        updateBoard[x].value === X &&
        updateBoard[y].value === X &&
        updateBoard[z].value === X
      ) {
        setPlayerScores({
          player1: playerScores.player1 + 1,
          player2: playerScores.player2,
        });

        setTable(createTable);
        Swal.fire({
          icon: "success",
          title: "Brawo!",
          text: "Wygrywa gracz: " + X.toUpperCase(),
        });
        setPlayer1(true);
      }

      if (
        updateBoard[x].value === O &&
        updateBoard[y].value === O &&
        updateBoard[z].value === O
      ) {
        setPlayerScores({
          player1: playerScores.player1,
          player2: playerScores.player2 + 1,
        });

        setTable(createTable);
        Swal.fire({
          icon: "success",
          title: "Brawo!",
          text: "Wygrywa gracz: " + O.toUpperCase(),
        });
        setPlayer1(true);
      }
    });

    if (updateBoard.findIndex((e) => e.value === "") === -1) {
      setTable(createTable);
      setPlayer1(true);
      return;
    }
  };

  const handleBoxClick = (id, value) => {
    if (value !== "") return;

    const updateBox = {
      id,
      value: player1 ? X : O,
    };

    const updateBoard = table.map((item, itemId) => {
      if (itemId === id) {
        return updateBox;
      } else {
        return item;
      }
    });

    setTable(updateBoard);
    setPlayer1((prev) => !prev);
    checkWinner(updateBoard);
  };

  return (
    <div className="App">
      <h1>
        <span className="tic">Tic </span>
        <span className="tac">Tac </span>
        <span className="toe">Toe </span>
      </h1>
      <ScoreBoard playerScores={playerScores} isPlayer1={player1} />
      <Table table={table} handleBoxClick={handleBoxClick} />
    </div>
  );
};

export default App;
