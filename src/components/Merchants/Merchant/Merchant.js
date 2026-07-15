import React from 'react'
import "./Merchant.css"
import { useNavigate } from 'react-router-dom';

const Merchant = ({name, upiID, category}) => {

  const navigate = useNavigate();

  console.log (name, upiID);
  return (
    <div className='Merchant' onClick={() => {
      navigate("/enter-amount", {
          state: {
              qrData: `upi://pay?pa=${upiID}&pn=${name}&am=${0}&cu=INR`
          }
      })
    }}>
        <h3>{name.slice(0, 8)}{name.length > 8?"...":""}</h3>
        <p>{category}</p>
    </div>
  )
}

export default Merchant