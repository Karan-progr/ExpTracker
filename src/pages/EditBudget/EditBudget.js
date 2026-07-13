import React, { useEffect } from 'react'
import "./EditBudget.css"
import { useState } from 'react';
import API_URL from '../../config'
import { FaSave } from "react-icons/fa";

const EditBudget = () => {
  
    const [budget, setBudget] = useState([
        { category: "Food", budget: 10000 },
        { category: "Transport", budget: 3000 },
        { category: "Shopping", budget: 5000 },
        { category: "Entertainment", budget: 2000 },
        { category: "Health", budget: 1500 },
        { category: "Other", budget: 1000 }
    ]);

    useEffect(()=> {
        async function fetchBudget() {
            const res = await fetch(`${API_URL}/budget`,{
                method:"GET",
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("JWT")}`
                }
            });
            const data = await res.json();
            setBudget(data);
        }

        fetchBudget();
    }, [])

    async function updateBudget () {
        const res = await fetch(`${API_URL}/budget`,{
            method:"POST",
            headers:{
                Authorization: `Bearer ${localStorage.getItem("JWT")}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(budget)
        });
    }

    function handleChange(category, amount) {
        setBudget(budget.map((card)=>
            category === card.category
            ?{...card, budget: Number(amount)}
            :card
        ))
    }

    useEffect (() => {
        setTotal(0);
        budget.map((card) => {
            setTotal((prev) => prev + card.budget)
        })
    }, [budget])

    const [total, setTotal] = useState(0);

    return (
    <div className='EditBudget'>
        <div className='EditBudget-Header'>
            <h1>Your Budget ₹ {total}</h1>
            <FaSave onClick={() => {updateBudget()}} className='save-icon' />
        </div>
    {budget.map((card)=>
        <div className='BudgetCard' key={card.category}>
            <h2>{card.category}</h2>
            <input required type="number" placeholder='0' value={card.budget} onChange={(e) => {
                handleChange(card.category, e.target.value);
            }} >
                
            </input>
        </div>
    )}
    </div>
  )
}
 
export default EditBudget