import React, { useState } from 'react'
import "./EnterAmount.css"
import { useLocation } from 'react-router-dom'
import API_URL from '../../config';

const EnterAmount = () => {

    const location = useLocation();
    const qrData = location.state.qrData;
    const url = new URL(qrData);
    const params = Object.fromEntries(url.searchParams.entries());

    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("Food");

    async function handleSubmit(e) {
        e.preventDefault();

        window.location.href = `upi://pay?pa=${params.pa}&pn=${params.pn}&am=${amount}&cu=INR`;

        console.log (amount, category);

        fetch(`${API_URL}/new-transaction` ,{
            method:"POST",
            headers:{
                Authorization: `Bearer ${localStorage.getItem("JWT")}`,
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                amount:amount,
                category:category,
                payeeUpiID:params.pa,
                payeeName:params.pn
            })
        })

        console.log ( amount,category,params.pa,params.pn);
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
                    required
                    onChange={(e)=>
                        setAmount(e.target.value)
                    }
                />
            </form>
        </div>

        <div className="category">
            <label htmlFor="category">Category</label>

            <select id="category"
                onChange={(e) => {setCategory(e.target.value)}}
            >
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
            </select>
        </div>

        <p className="hint">
            Press <b>Enter</b> to continue
        </p>
    </div>
  )
}

export default EnterAmount