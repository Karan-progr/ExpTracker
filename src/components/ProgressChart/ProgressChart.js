import React, { useState, useEffect } from 'react'
import "./ProgressChart.css"

const ProgressChart = ({amount, percent, color}) => {

    console.log (amount);

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

    const currentAmount =
    percent > 0
        ? (amount * currentPercent) / percent
        : 0;
  return (
    <div className="pie">
        <div className="outer-circle" style={{
                // background: `conic-gradient(
                //     ${color} 0% ${currentPercent}%,
                //     black ${currentPercent}% 100%
                // )`,
                color: color
        }}>
            <div className="inner-circle">
                <div className='mask-circle' style={{background:`conic-gradient(
                        transparent 0% ${currentPercent}%,
                        white ${currentPercent}% 100%
                    )`}}>
                    <h2>₹{Math.round(currentAmount).toLocaleString()}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgressChart