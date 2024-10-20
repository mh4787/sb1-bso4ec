import React from 'react';
import { Pizza, Apple, Bone, Fish } from 'lucide-react';
import { usePet } from '../context/PetContext';

const Feeding = () => {
  const { feedPet, petStats } = usePet();

  const handleFeed = (food: string) => {
    feedPet(food);
  };

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Feed Your Pet</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <FoodItem icon={<Pizza className="w-12 h-12 text-red-500" />} name="Pizza" onFeed={handleFeed} />
          <FoodItem icon={<Apple className="w-12 h-12 text-green-500" />} name="Apple" onFeed={handleFeed} />
          <FoodItem icon={<Bone className="w-12 h-12 text-gray-500" />} name="Bone" onFeed={handleFeed} />
          <FoodItem icon={<Fish className="w-12 h-12 text-blue-500" />} name="Fish" onFeed={handleFeed} />
        </div>
        <p className="text-center mt-8 text-lg">
          Hunger level: {petStats.hunger}%
        </p>
      </div>
    </section>
  );
};

const FoodItem = ({ icon, name, onFeed }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-blue-100 transition duration-300"
      onClick={() => onFeed(name)}
    >
      <div className="mb-4">{icon}</div>
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default Feeding;