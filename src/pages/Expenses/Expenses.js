import React from 'react'

import "./Expenses.css"

const Expenses = () => {

    const expenses = [
        {
            category: "Food",
            budget: 8000,
            spent: 5400,
        },
        {
            category: "Transport",
            budget: 3000,
            spent: 1850,
        },
        {
            category: "Shopping",
            budget: 6000,
            spent: 4200,
        },
        {
            category: "Entertainment",
            budget: 2500,
            spent: 1700,
        },
        {
            category: "Health",
            budget: 4000,
            spent: 950,
        },
        {
            category: "Other",
            budget: 3500,
            spent: 1200,
        }
    ];

  return (
    <div className="Expenses">
        <div className='Expenses-header'>
            <h1>My Expenses</h1>
            <button>Edit Budget</button>
        </div>

        {expenses.map((expense) => {
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

    </div>
  )
}

export default Expenses