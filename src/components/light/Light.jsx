import React, {useState} from 'react';
import LightOn from './light-on.svg'
import LightOf from './light-off.svg'

import './style.css'

function Light({ name, state }) {
    const [lightState, setLightState] = useState(state)
    const lightImg = lightState ? LightOn : LightOf

    function handleClick(){
        setLightState(!lightState)
    }
    return (
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={lightImg} alt={''} />
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    );
}

export default Light;