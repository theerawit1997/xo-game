import { useState } from "react";
import Board from "./Board";

const PlayerX = "X";
const PlayerO = "O";

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PlayerX);

  const handleTileClick = (index) => {
    if (tiles[index] !== null) {
      return;
    }

    console.log(index);
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PlayerX) {
      setPlayerTurn(PlayerO);
    } else {
      setPlayerTurn(PlayerX);
    }
  };

  return (
    <>
      <h1>XO Game</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
      />
    </>
  );
}

export default TicTacToe;
