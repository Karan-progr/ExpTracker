import React from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import DashboardComp from '../../components/Dashboard/DashboardComp'
import { IoQrCodeOutline } from "react-icons/io5";
import Scanner from '../Scanner/Scanner'

const Dashboard = () => {
  return (
    <>
        <Header/>
        <DashboardComp/>
        <Link to="/scan" className='qr'><IoQrCodeOutline /></Link>
    </>
  )
}

export default Dashboard