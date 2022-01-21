import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export default function Login({ setToken }) {
    async function check(credentials) {
        let res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": credentials.username,
                "password": credentials.password
            })
        })
        if (res.status == 200) {
            localStorage.setItem("username", credentials.username)
            localStorage.setItem("password", credentials.password)
            navigate('/')
        }
        else {
            console.log(res);
            alert("error")
        }
    }
    const navigate = useNavigate()

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await check({
            username,
            password
        });
    }

    return (
        <div className="login-wrapper">
            <h1>Autentificare</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Parolă</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit" >Autentifică</button>
                </div>
                <div class="container-password">
                    <span >Vrei să îți creezi un
                        <Link to={"/creeazaCont"}> cont nou?</Link>
                    </span>
                </div>
                <div class="container-password">
                    <span > Ai uitat parola?
                        <Link to={"/reseteazaParola"}>  Reseteaza parola.</Link>
                    </span>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};