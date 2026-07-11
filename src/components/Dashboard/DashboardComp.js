import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import ProgressChart from '../ProgressChart/ProgressChart'
import Merchants from '../Merchants/Merchants';
import API_URL from "../../config"
import { useNavigate } from 'react-router-dom';

const DashboardComp = () => {

    const navigate = useNavigate();

    const [dashboardData, setDashboardData] = useState({
        spent:0,
        budget:0,
        merchants:[]
    })

    useEffect(() => {
        async function fetchDashboard() {
            try {
                    const response = await fetch(`${API_URL}/dashboard`, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("idToken")}`
                        }
                    });
                    const parsedData = await response.json();
                    setDashboardData(parsedData);
            }

            catch (err) {
                console.log (err);
                // navigate("/login")
            }
        }

        fetchDashboard();
    }, []);

    const percent = (dashboardData.spent / dashboardData.budget) * 100;

    function formatAmount (amount) {
        amount = amount.toString();
        const length = amount.length;
        let first = true;
        let i = length;
        while (i > 2) {
            if (first) {
                i -= 3
                first = false;
            }
            else {
                i -= 2;
            }
            const beforeComma = amount.slice (0, i);
            const afterComma = amount.slice (i);
            amount = beforeComma + "," + afterComma;
        }
        return amount;
    }

  return (
    <div className="Dashboard">
        <div className="Dashboard-Header">
            <h2>Spendings</h2>
            <select>
                <option value="today">Today</option>
                <option value="thisMonth">This Month</option>
                <option value="thisWeek">This Week</option>
                <option value="thisYear">This Year</option>
            </select>
        </div>
        <ProgressChart color={dashboardData.spent < dashboardData.budget?"#10B981":"red"} amount={`₹${formatAmount(dashboardData.spent)}`} percent={percent}/>
        <h2>Your Budget {`₹${formatAmount(dashboardData.budget)}`}</h2>
        <p>{dashboardData.spent < dashboardData.budget?"you're within your budget":"you've exceeded your budget"}</p>
        <Merchants merchants = {dashboardData.merchants} />
    </div>
  )
}

export default DashboardComp