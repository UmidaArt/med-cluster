import React from 'react';
import './ChangePositionCards.css'

const ChangePositionCards = ({positionCardsFlex, positionCardsList}) => {

    return (
        <div className="changePositionBlock">
            <div className="icon" id="flex-view" onClick={() => positionCardsFlex(true)}><i className='bx bx-qr'/></div>
            <div className="icon" id="list-view" onClick={() => positionCardsList(false)}><i className='bx bx-menu'/></div>
        </div>
    );
};

export default ChangePositionCards;