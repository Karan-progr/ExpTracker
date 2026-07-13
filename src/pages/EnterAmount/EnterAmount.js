import React, { useState } from 'react'
import "./EnterAmount.css"
import { useLocation } from 'react-router-dom'
import API_URL from '../../config';

const EnterAmount = () => {

    const location = useLocation();
    // const qrData = location.state.qrData;
    const url = new URL("upi://pay?pa=8903206469@upi&pn=karan&am=$100&cu=INR");
    const params = Object.fromEntries(url.searchParams.entries());

    const [amount, setAmount] = useState(0);

    async function handleSubmit(e) {
        e.preventDefault();

        window.location.href = `upi://pay?pa=${params.pa}&pn=${params.pn}&am=${amount}&cu=INR`;


        fetch(`${API_URL}/new-transaction` ,{
            method:"POST",
            headers:{
                Authorization: `Bearer ${localStorage.getItem("JWT")}`,
                "Content-Type": "application/json"
            },
            body:{
                amount:amount
            }
        })
    }

  return (
    <div className="EnterAmount">
        <div className="amount">
            <span>₹</span>
            <form onSubmit={handleSubmit}>
                <input
                    min="1"
                    autoFocus
                    type="number"
                    placeholder="0"
                    onChange={(e)=>
                        setAmount(e.target.value)
                    }
                />
            </form>
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