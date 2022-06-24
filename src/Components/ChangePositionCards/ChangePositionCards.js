import React, {useState} from 'react';
import './ChangePositionCards.css'

const ChangePositionCards = () => {

    const [change, setChange] = useState(false)



    return (
        <div className="changePositionBlock">
            <div className="icon" id="grid-view" onClick={() => setChange(true)}><i className='bx bx-qr'/></div>
            <div className="icon" id="list-view"><i className='bx bx-menu'/></div>
        </div>
    );
};

export default ChangePositionCards;