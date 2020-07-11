import React from 'react';

import "./GameBoard.scss";
import Header from "../Header/Header";
import Body from "../Body/Body";

const GameBoard: React.FC = () => {

    return (
        <div className="GameBoard">
            <Header></Header>
            <Body></Body>
        </div>
    )
};

export default GameBoard;