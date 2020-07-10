import React from 'react';

import "./GameBoard.scss";

const GameBoard: React.FC = () => {

    return (
        <div className="GameBoard">
            <div className="Header">
                <div className="Counter">2626</div>
                <div className="NewGame">New Game</div>
                <div className="Counter">2626</div>
            </div>
            <div className="Body">body</div>
        </div>
    )
};

export default GameBoard;