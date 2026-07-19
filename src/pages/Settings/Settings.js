import React, { useState } from 'react'
import API_URL from '../../config';
import "./Settings.css"
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Settings = () => {

    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    async function handleSubmit() {
        const res = await fetch (`${API_URL}/query`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("JWT")}`
            },
            body:JSON.stringify({
                query:query
            })
        })

        navigate("/");
    }
  return (
    <div className='Settings'>
        <div className='message'>
        <button className='' onClick={()=>{
            localStorage.setItem("JWT", null);
            navigate("/login")
        }}>Logout</button>
            <h2>This page is being constructed</h2>
            <p>If you have any query, <br /> feel free to reach us</p>
        </div>
        <form>
            <textarea onChange={(e)=>setQuery(e.target.value)} required rows={10} placeholder='Type your query here...' />
            <button onClick={(e)=>{
                e.preventDefault();
                handleSubmit();
            }}>Submit</button>
        </form>
        <Footer />
    </div>
  )
}

export default Settings