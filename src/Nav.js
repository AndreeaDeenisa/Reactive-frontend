import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useState, Fragment } from "react";
import logo from "./imagini/logo.png";
import { BsPersonCircle } from "react-icons/bs";


function Nav() {
    const navigate = useNavigate();
    const navStyleState = useState({
        color: "white"
    });

    let handleClick = event => {
        alert(event);
    }

    return (
        <Fragment>
            <AppBar style={{ position: "relative" }}>
                <Toolbar>
                    {
                        <img src={logo} />
                    }

                    <ul className="nav-links">
                        <Link className="link-item" to={"/"} style={navStyleState[0]}>
                            <li>Acasă</li>
                        </Link>
                        <Link className="link-item" to={"/experiente"} style={navStyleState[0]}>
                            <div class="dropdown connct">
                                <button class="dropbtn">Experiențe utilizatori</button>

                                {
                                    localStorage.length != 0 && <> <div class="dropdown-content"><Link className="link-item" to={"/experiente"} style={navStyleState[0]}>
                                        <li>Listă experiențe</li>
                                    </Link><Link className="link-item" to={"/adaugaExperiente"} style={navStyleState[0]} >
                                            <li>Experiență nouă</li>
                                        </Link></div></>
                                }

                            </div>
                        </Link>

                        <Link className="link-item" to={"/logare"} style={navStyleState[0]}>
                            <div class="dropdown">
                                <button class="dropbtn-user"><BsPersonCircle /></button>
                                <div class="dropdown-content toright">
                                    <Link className="link-item" to={"/logare"} style={navStyleState[0]}>
                                        <li>Autentifică</li>
                                    </Link>
                                    <Link className="link-item" to={"/creeazaCont"} style={navStyleState[0]}>
                                        <li>Creează cont</li>
                                    </Link>
                                    {
                                        localStorage.length && <Link className="link-item" to={"/"} onClick={e => {
                                            alert(localStorage.getItem('username') + " disconnected");
                                            localStorage.removeItem('username')
                                            localStorage.removeItem('password')
                                        }} style={navStyleState[0]}>
                                            <li>Deconectează</li>
                                        </Link>
                                    }
                                    {
                                        localStorage.length && <Link className="link-item" to={"/setariCont"} style={navStyleState[0]}>
                                            <li>Setări cont</li>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </Link>
                    </ul>
                </Toolbar>
            </AppBar>
        </Fragment >
    );
}

export default Nav;
