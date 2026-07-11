import React, { useState, useEffect } from 'react'
import "./ProgressChart.css"

const ProgressChart = ({amount, percent, color}) => {

    const [currentPercent, setCurrentPercent] = useState(0);
    useEffect (() => {
        let current = 0;

        const interval = setInterval (() => {
            current += 1;
            if (current >= percent){  
                current = percent;
                clearInterval(interval);
            }
            setCurrentPercent(current);        

        }, 10);

        return ()=>clearInterval(interval);

    }, [percent]);

  return (
    <div className="pie">
        <div className="outer-circle" style={{
                background: `conic-gradient(
                    ${color} 0% ${currentPercent}%,
                    black ${currentPercent}% 100%
                )`,
                color: color
        }}>
            <div className="inner-circle">
                <h2>{amount}</h2>
            </div>
        </div>
    </div>
  )
}

export default ProgressChart