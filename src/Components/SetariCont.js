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
            alert("yey")
        else {
            console.log(res);
            alert("error")
        }
    }
    else
        alert('passwords don.t match');

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
        alert("user deleted")
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
                    <p>Schimba email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Parolă noua</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p>Confirmă parola noua</p>
                    <input type="password" onChange={e => setCPassword(e.target.value)} />
                </label>
                <div>
                    <button type="userButton">Update cont</button>
                </div>
                <div>
                    <button type="userButton" onClick={deleteUser}>Sterge cont</button>
                </div>
            </form >
        </div >
    )
}

UpdateCont.propTypes = {
    setToken: PropTypes.func.isRequired
};
