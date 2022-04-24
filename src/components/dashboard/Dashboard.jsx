import React from 'react';
import './style.css'
import Lights from "../lights/Lights";
import Climate from "../climate/Climate";
import Blinds from "../blinds/Blinds";
import Energy from "../energy/Energy";

function Dashboard({ data }) {
    return (
        <main className="dashboard">
            <Lights lights={data.lights}/>
            <Climate temperature={data.climate.temperature} humidity={data.climate.humidity}/>
            <Blinds state={data.blinds} />
            <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water}/>
        </main>);
}

export default Dashboard;