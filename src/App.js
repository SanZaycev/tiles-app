import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./chunks/Header/Header";
import TilesContainer from "./chunks/Tiles/TilesContainer";
import StartRoundContainer from "./chunks/Startgame/StartRoundContainer";

const App = () => {
  return (
      <div className="App">
        <Header />
        <StartRoundContainer />
        <main className="appmain container">
          <div className="main-row">
            <Route path='/tiles' render={() => <TilesContainer />}/>
          </div>
        </main>
      </div>
  );
}

export default App;