import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = ({name, picture}) => {

    const navigate = useNavigate();

    return (
        <div className="Header">
            <h1>Hi {name}!</h1>
            { name !== ""? <img src={picture}></img>
            :<button onClick={() => {
                navigate("/login");
            }}>Login</button>}
        </div>

    )
}

export default Header