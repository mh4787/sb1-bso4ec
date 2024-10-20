import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Jobless Pets</h3>
            <p className="text-sm">A virtual pet app that provides a fun and interactive experience.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200 transition duration-300"><Facebook /></a>
            <a href="#" className="hover:text-blue-200 transition duration-300"><Twitter /></a>
            <a href="#" className="hover:text-blue-200 transition duration-300"><Instagram /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Jobless Pets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;