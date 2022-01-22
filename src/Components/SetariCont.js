import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

async function changeUser(credentials) {
    console.log(credentials.password);
    console.log(credentials.cpassword);
    if (credentials.password == credentials.cpassword) {
        let obj = {
            "username": localStorage.getItem("username"),
            "password": localStorage.getItem("password")
        }
        if (credentials.password)
            obj["newPassword"] = credentials.password
        if (credentials.email)
            obj["email"] = credentials.email
        console.log(obj);
        let res = await fetch('http://localhost:3000/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        if (res.status == 201)
            alert("Acțiune realizată cu succes!")
        else {
            console.log(res);
            alert("Mail invalid/parolă incorectă: minim 8 caractere(cel puțin 1 literă mare, 1 literă mică, 1 cifră, 1 caracter special)")
        }
    }
    else
        alert('Parolele nu se potrivesc');

}

async function deleteUser(credentials) {
    let res = await fetch('http://localhost:3000/user', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": localStorage.getItem("username"),
            "password": localStorage.getItem("password")
        })
    })
    if (res.status == 200)
        alert("Odată ce vă deconectați, contul va fi șters.")
    else {
        console.log(res);
        alert("error")
    }

}

export default function UpdateCont({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await changeUser({
            email,
            password,
            cpassword
        });
    }

    return (
        <div className="login-wrapper">
            <h1>Update cont</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Schimbă email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Schimbă parola</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p>Confirmă parola nouă</p>
                    <input type="password" onChange={e => setCPassword(e.target.value)} />
                </label>
                <div>
                    <button type="userButton">Actualizează cont</button>
                </div>
                <div>
                    <button type="userButton" onClick={deleteUser}>Șterge cont</button>
                </div>
            </form >
        </div >
    )
}

UpdateCont.propTypes = {
    setToken: PropTypes.func.isRequired
};
