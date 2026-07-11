import React from 'react'
import "./Merchant.css"

const Merchant = ({name, upiId, category}) => {

  console.log (name, upiId);
  return (
    <div className='Merchant'>
        <h3>{name}</h3>
        <p>{category}</p>
    </div>
  )
}

export default Merchant