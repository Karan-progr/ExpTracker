import React from 'react'
import "./Footer.css"
import { IoMdQrScanner } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoReceiptOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='Footer'>
        <Link to="/my-expenses" className='notQr'><IoReceiptOutline /></Link>
        <Link to="/scan" className='qr'><IoMdQrScanner /></Link>
        <Link to="/scan" className='notQr'><IoSettingsOutline /></Link>
    </div>
  )
}

export default Footer