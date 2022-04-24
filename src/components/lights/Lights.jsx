import React from 'react';
import Light from "../light/Light";
import './style.css'

function Lights({ lights }) {
    return (
        <div className={'lights'}>
            {lights.map((light) => (
                <Light
                    key={light.name}
                    name={light.name}
                    state={light.state}
                />
            ))}
        </div>
    );
}

export default Lights;