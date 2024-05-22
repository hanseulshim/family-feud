import {
  createContext,
  useState,
  useEffect,
  FunctionComponent,
  ReactNode,
} from "react";

import { GameState } from "../types/GameTypes";

const initialState: GameState = {
  questions: [],
  team1: { name: "Team 1", score: 0 },
  team2: { name: "Team 2", score: 0 },
};

type GameContextType = {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  resetGameState: () => void;
};

export const GameContext = createContext<GameContextType>({
  gameState: initialState,
  setGameState: () => {},
  resetGameState: () => {},
});

interface GameProviderProps {
  children: ReactNode;
}

const getGameStateFromLocalStorage = (): GameState => {
  const localGameState = localStorage.getItem("gameState");
  if (localGameState !== null) {
    try {
      return JSON.parse(localGameState);
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          `Error parsing gameState from localStorage: ${error.message}`
        );
      }
      console.error(
        "Removing gameState from localStorage and reverting to initiazzzlState"
      );
      localStorage.removeItem("gameState");
      return initialState;
    }
  }
  return localGameState !== null ? JSON.parse(localGameState) : initialState;
};

export const GameProvider: FunctionComponent<GameProviderProps> = ({
  children,
}) => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const localGameState = getGameStateFromLocalStorage();
    return localGameState !== null ? localGameState : initialState;
  });

  const resetGameState = () => {
    setGameState(initialState);
  };

  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [gameState]);

  // Listen for changes to localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const localGameState = getGameStateFromLocalStorage();
      setGameState(localGameState);
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [gameState]);

  return (
    <GameContext.Provider value={{ gameState, setGameState, resetGameState }}>
      {children}
    </GameContext.Provider>
  );
};
