import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

async function resetPassword(credentials) {
    let res = await fetch('http://localhost:3000/resetpassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": credentials.username
        })
    })
    if (res.status == 200)
        alert("parola resetata")
    else {
        console.log(res);
        alert("error")
    }
}

// async function test() {

// }

export default function ReseteazaParola({ setToken }) {
    const [username, setUserName] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await resetPassword({
            username
        });
    }

    // const navigate = useNavigate();

    // const routeChange = () => {
    //     let path = `/logare`;
    //     navigate(path);
    // }

    return (
        <div className="login-wrapper">
            <h1>Resetare parola</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <div>
                    <button type="userButton" >Reseteaza</button>
                </div>
            </form >
        </div >
    )
}

ReseteazaParola.propTypes = {
    setToken: PropTypes.func.isRequired
};
