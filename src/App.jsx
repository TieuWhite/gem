import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="title">CHARACTER</div>
        <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
        <div className="divider"></div>
        <div className="game-container">
          <div className="avatar-area">
            <div className="avatar-wrapper">
              <div className="avatar"></div>
              <button className="random-btn">Randomize!</button>
            </div>
            <div className="customize-area"></div>
            <image src="./assets/character/body/1.png"></image>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
