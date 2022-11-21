import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Background from './Components/Background';
import Intro from './Components/Intro';
import Skills from './Components/Skills'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Background/>
      <Intro/>
      {/* <Skills/> */}
    </div>
  );
}

export default App;
