import React from 'react'
import "./Header.css"

const Header = () => {

    const userName = "User";
    return (
        <div className="Header">
            <h1>Hi {userName}!</h1>
            <img src='https://www.picsum.photos/40/40'></img>
        </div>

    )
}

export default Header