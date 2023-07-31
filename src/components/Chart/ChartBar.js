import React from "react";

import './ChartBar.css'

const ChartBar = (props)=>{
    let barFilliHeight= '0%'; //Valor inicial del relleno de barra

    if (props.maxValue > 0){
        barFilliHeight= Math.round((props.value / props.maxValue)*100) + '%'; //nos da el % de barra que se debe llenar 
    }

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div 
                className="chart-bar__fill" 
                style={{height: barFilliHeight}}
            >

            </div>
        </div>
        <div className="chart-bar__label">
            {props.label}
        </div>
    </div>
};

export default ChartBar;