import React from 'react';
import { Heart, MessageCircle, Utensils, Gamepad2 } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={<Heart className="w-12 h-12 text-red-500" />} title="Customizable Pet Profile" description="Display stats like happiness and hunger" />
          <FeatureCard icon={<MessageCircle className="w-12 h-12 text-green-500" />} title="Engaging Chat" description="Message bubbles, emojis, and stickers" />
          <FeatureCard icon={<Utensils className="w-12 h-12 text-yellow-500" />} title="Feeding Menu" description="Food options with fun animations" />
          <FeatureCard icon={<Gamepad2 className="w-12 h-12 text-purple-500" />} title="Mini-Games Hub" description="Colorful tiles for different activities" />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;