import { useEffect, useState } from "react";
import Board from "./Board";

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  return (
    <>
      <h1>XO Game</h1>
      <Board tiles={tiles} />
    </>
  );
}

export default TicTacToe;
