import React from 'react';
import { Heart, Battery, Utensils } from 'lucide-react';
import { usePet } from '../context/PetContext';

const PetProfile = () => {
  const { petName, setPetName, petStats } = usePet();

  return (
    <section id="profile" className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pet Profile</h2>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <img src="https://source.unsplash.com/300x300/?cute,pet" alt="Pet" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="text-2xl font-semibold text-center mb-4 w-full"
            placeholder="Enter pet name"
          />
          <div className="flex justify-center space-x-8 mb-6">
            <Stat icon={<Heart className="w-6 h-6 text-red-500" />} label="Happiness" value={`${petStats.happiness}%`} />
            <Stat icon={<Battery className="w-6 h-6 text-green-500" />} label="Energy" value={`${petStats.energy}%`} />
            <Stat icon={<Utensils className="w-6 h-6 text-yellow-500" />} label="Hunger" value={`${petStats.hunger}%`} />
          </div>
        </div>
        <div className="mt-8 text-center">
          <img src="https://source.unsplash.com/600x400/?pet,playing" alt="Pet playing" className="rounded-lg shadow-lg mx-auto" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, label, value }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">{icon}</div>
      <p className="text-gray-600">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default PetProfile;