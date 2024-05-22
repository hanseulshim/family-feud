import { useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import Button from "../common/Button";

const TeamNames = () => {
  const { gameState, setGameState } = useContext(GameContext);
  const [team1Name, setTeam1Name] = useState(gameState.team1.name);
  const [team2Name, setTeam2Name] = useState(gameState.team2.name);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setGameState({
      ...gameState,
      team1: { ...gameState.team1, name: team1Name },
      team2: { ...gameState.team2, name: team2Name },
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Change Team Names</h2>
      <h3 className="text-l mb-1">
        Current Team 1 Name: {gameState.team1.name}
      </h3>
      <h3 className="text-l mb-4">
        Current Team 2 Name: {gameState.team2.name}
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="team1"
            className="block text-sm font-medium text-gray-700"
          >
            New Team 1 Name
          </label>
          <input
            type="text"
            id="team1"
            name="team1"
            value={team1Name}
            onChange={(e) => setTeam1Name(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="team2"
            className="block text-sm font-medium text-gray-700"
          >
            New Team 2 Name
          </label>
          <input
            type="text"
            id="team2"
            name="team2"
            value={team2Name}
            onChange={(e) => setTeam2Name(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="w-auto">
          <Button secondary>Update Teams</Button>
        </div>
      </form>
    </div>
  );
};

export default TeamNames;
