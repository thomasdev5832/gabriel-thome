import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';


function App() {
  useEffect(() => {
    document.title = "Gabriel Thome - Blockchain Developer";
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
