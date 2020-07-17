import React from 'react';

import "./Header.scss";

const Header: React.FC = () => {

    return (
        <div className="Header">
            <div className="Counter">10</div>
            <button className="NewGame">New Game</button>
            <div className="Counter">0</div>
        </div>
    )
};

export default Header;