import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function createUser(credentials) {
    if (credentials.password === credentials.cpassword) {
        let res = await fetch('https://reactive-backend.herokuapp.com/user', {
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
        if (res.status === 200)
            alert("Verifica email-ul pentru activare")
        else {
            console.log(res);
            alert("Username existent/ mail invalid/ parolă incorectă: minim 8 caractere(cel puțin 1 literă mare, 1 literă mică, 1 cifră, 1 caracter special)")
        }
    }
    else
        alert('Parolele nu se potrivesc');

}


export default function CreeazaCont() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await createUser({
            username,
            email,
            password,
            cpassword
        });
    }

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
