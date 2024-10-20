import React, { createContext, useContext, useState, useEffect } from 'react';

interface PetStats {
  happiness: number;
  energy: number;
  hunger: number;
}

interface PetContextType {
  petName: string;
  setPetName: (name: string) => void;
  petStats: PetStats;
  updateStats: (newStats: Partial<PetStats>) => void;
  feedPet: (food: string) => void;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

export const PetProvider: React.FC = ({ children }) => {
  const [petName, setPetName] = useState('Fluffy');
  const [petStats, setPetStats] = useState<PetStats>({
    happiness: 50,
    energy: 50,
    hunger: 50,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setPetStats(prevStats => ({
        happiness: Math.max(0, prevStats.happiness - 1),
        energy: Math.max(0, prevStats.energy - 1),
        hunger: Math.min(100, prevStats.hunger + 1),
      }));
    }, 10000); // Update stats every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const updateStats = (newStats: Partial<PetStats>) => {
    setPetStats(prevStats => ({
      ...prevStats,
      ...newStats,
    }));
  };

  const feedPet = (food: string) => {
    const foodEffects = {
      Pizza: { hunger: -20, happiness: 10 },
      Apple: { hunger: -10, energy: 5 },
      Bone: { hunger: -15, happiness: 5 },
      Fish: { hunger: -15, energy: 10 },
    };

    const effect = foodEffects[food as keyof typeof foodEffects];
    if (effect) {
      updateStats({
        hunger: Math.max(0, petStats.hunger + effect.hunger),
        happiness: Math.min(100, petStats.happiness + (effect.happiness || 0)),
        energy: Math.min(100, petStats.energy + (effect.energy || 0)),
      });
    }
  };

  return (
    <PetContext.Provider value={{ petName, setPetName, petStats, updateStats, feedPet }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePet = () => {
  const context = useContext(PetContext);
  if (context === undefined) {
    throw new Error('usePet must be used within a PetProvider');
  }
  return context;
};