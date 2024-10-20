import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);

  const handleGetStarted = () => {
    setShowImage(true);
    const dog = document.getElementById('animated-dog');
    if (dog) {
      dog.style.display = 'block';
      dog.style.left = '-100px';
      const animation = dog.animate(
        [
          { left: '-100px' },
          { left: 'calc(100% + 100px)' }
        ],
        {
          duration: 2000,
          easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
        }
      );
      animation.onfinish = () => {
        dog.style.display = 'none';
        navigate('/profile');
      };
    } else {
      setTimeout(() => navigate('/profile'), 2000);
    }
  };

  return (
    <section className="bg-blue-500 text-white py-20 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Jobless Pets</h2>
        <p className="text-xl mb-8">A virtual pet app that provides a fun and interactive experience.</p>
        {!showImage ? (
          <button onClick={handleGetStarted} className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
        ) : (
          <img src="https://source.unsplash.com/600x400/?cute,puppy" alt="Cute puppy" className="mx-auto rounded-lg shadow-lg mb-8 transition-opacity duration-500 opacity-100" />
        )}
      </div>
      <img
        id="animated-dog"
        src="https://i.ibb.co/JsRx9Gy/baby-dog-tiny-cute-adorable-600nw-2208569943.webp"
        alt="Running dog"
        className="absolute bottom-0 hidden"
        style={{ width: '100px', height: 'auto' }}
      />
    </section>
  );
};

export default Hero;