import './App.css';
import { React, useState } from 'react';
function App() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({x: 0, y: 0});
  const [miss, setMiss] = useState(false);

  function shootTarget() {
    setScore(score + 1);
    generateTarget()
  }

  function generateTarget() {
    var target = document.getElementById("target")
    setPosition({x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight});
    target.style.position = 'absolute'
    target.style.left = position.x + "px";
    target.style.top = position.y + "px";
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aimlabs....Kinda</h1>
        <p>Aim Training</p>
        <p>Score: {score}</p>
        <div id='target' onClick={shootTarget}></div>
      </header>
    </div>
  );
}

export default App;
