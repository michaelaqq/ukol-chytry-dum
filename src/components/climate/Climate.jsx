import React, {useState} from 'react';
import ClimateImg from './temp.svg'
import './style.css'

function Climate({ temperature, humidity }) {
    const [climateTemp, setClimateTemp] = useState(temperature)
    function handlePlusClick(){
        if (climateTemp <= 31) {
            setClimateTemp(climateTemp + 1)
        }
    }
    function handleMinusClick(){
        if (climateTemp >= 1 )
        setClimateTemp(climateTemp - 1)
    }
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={ClimateImg} alt={''} />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{climateTemp}&deg;C</div>
                <div className="climate__humidity">Vlhkost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={handlePlusClick}>+</button>
                <button className="button" onClick={handleMinusClick}>-</button>
            </div>
        </div>
    );
}

export default Climate;