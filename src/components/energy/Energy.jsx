import React from 'react';
import ElectricityImg from './electricity.svg'
import WaterImg from './water.svg'
import './style.css'

function Energy({ electricity, water }) {
    return (
        <div className="energy">
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={ElectricityImg} alt={''} />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Elektřina</div>
                    <div className="energy__value">{electricity} kW</div>
                </div>
            </div>
            <div className="energy__source">
                <div className="energy__icon">
                    <img src={WaterImg} alt={''} />
                </div>
                <div className="energy__consumption">
                    <div className="energy__description">Voda</div>
                    <div className="energy__value">{water} m<sup>3</sup></div>
                </div>
            </div>
        </div>
    );
}

export default Energy;