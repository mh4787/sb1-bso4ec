import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PetProfile from './components/PetProfile';
import Chat from './components/Chat';
import Feeding from './components/Feeding';
import Games from './components/Games';
import Footer from './components/Footer';
import { PetProvider } from './context/PetContext';

function App() {
  return (
    <Router>
      <PetProvider>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<>
                <Hero />
                <Features />
              </>} />
              <Route path="/profile" element={<>
                <PetProfile />
                <Chat />
                <Feeding />
                <Games />
              </>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </PetProvider>
    </Router>
  );
}

export default App;