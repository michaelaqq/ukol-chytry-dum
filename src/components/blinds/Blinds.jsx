import React, {useState} from 'react';
import BlindOpenImg from './blinds-open.svg'
import BlindClosedImg from './blinds-closed.svg'
import './style.css'

function Blinds({state}) {
    const [blindsState, setBlindsState] = useState(state)

    function handleOpenClick(){
        setBlindsState('open')
    }

    function handleCloseClick(){
        setBlindsState('closed')
    }

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={blindsState==='open' ? BlindOpenImg : BlindClosedImg} alt={''} />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className="button button--active" onClick={handleOpenClick}>Otevřeno</button>
                <button className="button" onClick={handleCloseClick}>Zavřeno</button>
            </div>
        </div>
    );
}

export default Blinds;