import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Background from './Components/Background';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Background/>
    </div>
  );
}

export default App;
