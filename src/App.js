import React from 'react';
import Navbar from './components/Navbar';
import Introduciton from './components/Introduction';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Introduciton />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
