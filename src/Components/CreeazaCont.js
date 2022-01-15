import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function createUser(credentials) {
    console.log(credentials.password);
    console.log(credentials.cpassword);
    if (credentials.password == credentials.cpassword) {
        let res = await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": credentials.username,
                "password": credentials.password,
                "email": credentials.email
            })
        })
        if (res.status == 200)
            alert("Verifica mail-ul pentru activare")
        else {
            console.log(res);
            alert("error")
        }
    }
    else
        alert('passwords don.t match');

}


export default function CreeazaCont({ setToken }) {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await createUser({
            username,
            email,
            password,
            cpassword
        });
    }

    // const handleBack = async e => {
    //     e.preventDefault();
    // }

    return (
        <div className="login-wrapper">
            <h1>Creează cont</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Parolă</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p>Confirmă parola</p>
                    <input type="password" onChange={e => setCPassword(e.target.value)} />
                </label>
                <div>
                    <button type="userButton">Creează cont</button>
                </div>
            </form >
        </div >
    )
}

CreeazaCont.propTypes = {
    setToken: PropTypes.func.isRequired
};
