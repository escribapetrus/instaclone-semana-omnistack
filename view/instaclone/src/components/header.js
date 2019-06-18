import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./header.css";
import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg"

export class Header extends Component {

    render() {
        return (
            <header className="Header">
                <div className="Header-content">
                    <Link to="/">
                    <img src={logo} alt="Instaclone"/>
                    </Link>
                    <Link to="/new">
                    <img src={camera} alt="New post"/>
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header
