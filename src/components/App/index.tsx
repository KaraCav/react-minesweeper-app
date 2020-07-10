import React from 'react';
import GameBoard from '../GameBoard/GameBoard';


import "./app.scss";

const App: React.FC = () => {

    return (
        <div className="App">
            <h1>MineSweeper</h1>
            <GameBoard></GameBoard>
        </div>
    )
};

export default App;