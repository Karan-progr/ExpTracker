import React from 'react'
import "./EnterAmount.css"
import { useLocation } from 'react-router-dom'

const EnterAmount = () => {

    const location = useLocation();
    const qrData = location.state.qrData;

    const url = new URL(qrData);
    const params = Object.fromEntries(url.searchParams.entries());


  return (
    <div className="EnterAmount">
        <div className="amount">
            <span>₹</span>
            <input
                autoFocus
                type="number"
                placeholder="0"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        window.location.href =
                            `upi://pay?pa=${params.pa}&pn=${params.pn}&am=${e.target.value}&cu=INR`;
                    }
                }}
            />
        </div>

        <div className="category">
            <label htmlFor="category">Category</label>

            <select id="category" defaultValue="food">
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="shopping">Shopping</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
            </select>
        </div>

        <p className="hint">
            Press <b>Enter</b> to continue
        </p>
    </div>
  )
}

export default EnterAmount