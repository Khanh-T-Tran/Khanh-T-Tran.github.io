import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import Intro from './Components/Intro';
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact'
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Background/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
