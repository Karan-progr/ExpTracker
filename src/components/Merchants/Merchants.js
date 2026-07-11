import React, { useState } from 'react'
import "./Merchants.css"
import Merchant from './Merchant/Merchant';

const Merchants = ({merchants}) => {

  
    // const [merchants, setMerchants] = useState([
    //     {
    //         name:"Ravi Juice",
    //         upiId:"ravi@okfcback",
    //         category:"bevarages"
    //     },
    //     {
    //         name:"Ravi Juice",
    //         upiId:"ravi@okfcback",
    //         category:"bevarages"
    //     },
    //     {
    //         name:"Ravi Juice",
    //         upiId:"ravi@okfcback",
    //         category:"bevarages"
    //     },
    //     {
    //         name:"Ravi Juice",
    //         upiId:"ravi@okfcback",
    //         category:"bevarages"
    //     }
    // ]);

  return (
    <div className='Merchants'>
        <h2>Recent Merchants</h2>
        { 
            merchants.length > 0? merchants.map ((merchant) => 
             <Merchant name = {merchant.name} upiId = {merchant.upiId} category={merchant.category}/>
            ):<h3>No Recent Merchants</h3>
        }
    </div>
  )
}

export default Merchants