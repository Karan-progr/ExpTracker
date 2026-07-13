import React, { useEffect } from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import DashboardComp from '../../components/Dashboard/DashboardComp'
import Scanner from '../Scanner/Scanner'
import API_URL from '../../config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const Dashboard = () => {

  const navigate = useNavigate();
  
    const [dashboardData, setDashboardData] = useState({
        spent:53688,
        budget:60000,
        merchants:[],
        name:"",
        picture:"",
        expenses:[]
    })

    useEffect(() => {
        async function fetchDashboard() {
            try {
                    const response = await fetch(`${API_URL}/dashboard`, {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("JWT")}`
                        }
                    });
                    const parsedData = await response.json();
                    setDashboardData(parsedData);
                    console.log (parsedData.name);
            }

            catch (err) {
                console.log (err);
                navigate("/login")
            }
        }

        fetchDashboard();
    }, []);
  
  return (
    <>
        <Header name = {dashboardData.name} picture = {dashboardData.picture}/>
        <DashboardComp dashboardData={dashboardData}/>
        <div className='floating-toolbar'>

        </div>
        <Footer />
    </>
  )
}

export default Dashboard