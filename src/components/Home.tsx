import { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../contexts/GameContext";
import logo from "../assets/logo.svg";
import Button from "./common/Button";

const Game = () => {
  const { gameState, resetGameState } = useContext(GameContext);
  return (
    <>
      <img src={logo} />
      <div className="flex space-x-4 mt-4">
        <Button onClick={resetGameState}>
          <Link to="/setup">New Game</Link>
        </Button>
        <Button>
          <Link to="/setup">Resume Game</Link>
          {gameState?.round && <Link to="/setup">Resume Game</Link>}
        </Button>
      </div>
    </>
  );
};

export default Game;
