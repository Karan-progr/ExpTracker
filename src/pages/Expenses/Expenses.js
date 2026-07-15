import React, { useEffect, useState } from 'react'

import "./Expenses.css"
import API_URL from '../../config';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Expenses = () => {

    const [expenses, setExpenses] = useState([
        {
            category: "Food",
            budget: 0,
            spent: 0,
        },
        {
            category: "Transport",
            budget: 0,
            spent: 0,
        },
        {
            category: "Shopping",
            budget: 0,
            spent: 0,
        },
        {
            category: "Entertainment",
            budget: 0,
            spent: 0,
        },
        {
            category: "Health",
            budget: 0,
            spent: 0,
        },
        {
            category: "Other",
            budget: 0,
            spent: 0,
        }
    ]);

    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchExpenses() {
            const res = await fetch(`${API_URL}/my-expenses`, {
                method:"GET",
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("JWT")}`
                }
            })
            const data = await res.json();
            setExpenses(data);
            console.log (data);
        }
        fetchExpenses();
    }, [])

  return (
    <div className="Expenses">
        <div className='Expenses-header'>
            <h1>My Expenses</h1>
            <button onClick={() => {
                navigate("/edit-budget")
            }}>Edit Budget</button>
        </div>

        {
        expenses.map((expense) => {
            const percentage =
                expense.budget > 0
                    ? Math.min((expense.spent / expense.budget) * 100, 100)
                    : 0;

            return (
                <div className="category-card" key={expense.category}>
                    <div className="card-header">
                        <h3>{expense.category}</h3>
                        <span>₹{expense.spent} / ₹{expense.budget}</span>
                    </div>

                    <div className="progress">
                        <div
                            className="progress-fill"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>

                    <p>{percentage.toFixed(0)}% used</p>
                </div>
            );
        })}

        <Footer />

    </div>
  )
}

export default Expenses