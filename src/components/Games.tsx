import React, { useState } from 'react';
import { Gamepad2, Puzzle, Target, Dice6 } from 'lucide-react';
import { usePet } from '../context/PetContext';

const Games = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const { updateStats } = usePet();

  const playGame = (game: string) => {
    setActiveGame(game);
    setTimeout(() => {
      const happinessIncrease = Math.floor(Math.random() * 10) + 5;
      const energyDecrease = Math.floor(Math.random() * 10) + 5;
      updateStats({
        happiness: Math.min(100, happinessIncrease),
        energy: Math.max(0, -energyDecrease),
      });
      setActiveGame(null);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mini-Games Hub</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <GameTile icon={<Gamepad2 className="w-12 h-12 text-purple-500" />} name="Adventure" onPlay={playGame} />
          <GameTile icon={<Puzzle className="w-12 h-12 text-blue-500" />} name="Puzzle" onPlay={playGame} />
          <GameTile icon={<Target className="w-12 h-12 text-red-500" />} name="Target Practice" onPlay={playGame} />
          <GameTile icon={<Dice6 className="w-12 h-12 text-green-500" />} name="Dice Roll" onPlay={playGame} />
        </div>
        {activeGame && (
          <p className="text-center mt-8 text-lg">
            Playing {activeGame}... Your pet is having fun!
          </p>
        )}
      </div>
    </section>
  );
};

const GameTile = ({ icon, name, onPlay }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-yellow-100 transition duration-300"
      onClick={() => onPlay(name)}
    >
      <div className="mb-4">{icon}</div>
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default Games;