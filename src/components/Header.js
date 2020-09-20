import React, { Component } from 'react';
import  Logo from '../assets/logo.png';
import "./Header.css";

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <img className="logo" src={Logo} alt="logo jenkins" />
                </div>
            </React.Fragment>
        ) 
    }
}

export default Header;