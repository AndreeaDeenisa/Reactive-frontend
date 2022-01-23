import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function resetPassword(credentials) {
    let res = await fetch('https://reactive-backend.herokuapp.com/resetpassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": credentials.username
        })
    })
    if (res.status == 200)
        alert("După validarea adresei de email, veți primi un email cu noua parolă.")
    else {
        console.log(res);
        alert("error")
    }
}

export default function ReseteazaParola({ setToken }) {
    const [username, setUserName] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await resetPassword({
            username
        });
    }

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
