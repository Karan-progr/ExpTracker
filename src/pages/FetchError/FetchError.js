import React from 'react'
import "./FetchError.css"

const FetchError = () => {
  return (
    <div className='FetchError'>
        <h2>Failed To Fetch Your Data</h2>
        <p>Please check your internet connection</p>
        <p>Or server might be down please try again later</p>
    </div>
  )
}

export default FetchError