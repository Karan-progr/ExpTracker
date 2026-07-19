import React, { useEffect } from 'react'
import "./EditBudget.css"
import { useState } from 'react';
import API_URL from '../../config'
import { FaSave } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const EditBudget = () => {

    const navigate = useNavigate();
  
    const [budget, setBudget] = useState([
        { category: "Food", budget: 0 },
        { category: "Transport", budget: 0 },
        { category: "Shopping", budget: 0 },
        { category: "Entertainment", budget: 0 },
        { category: "Health", budget: 0 },
        { category: "Other", budget: 0 }
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

            if (data && data.length !== 0) {
                setBudget(data);
            }

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
        navigate("/");
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
            <h1> ₹{total.toLocaleString()}</h1>
            <h3 onClick={() => {updateBudget()}} className='save-icon'>Save</h3>
        </div>
    {budget.map((card)=>
        <div className='BudgetCard' key={card.category}>
            <h2>{card.category}</h2>
            <input required type="number" placeholder='0' value={card.budget} onChange={(e) => {
                handleChange(card.category, e.target.value);
            }}
            onClick={(e) => e.target.select()}
            min={0} >
                
            </input>
        </div>
    )}

        <Footer />
    </div>
  )
}
 
export default EditBudget