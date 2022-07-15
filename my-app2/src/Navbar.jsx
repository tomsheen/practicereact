import React from 'react';
import './Navbar.css'

import Sheeny from './images/sheeny.svg'
import Twitter from './images/twitter.png'
import PoH from './images/poh.png'

function Navbar() {
    return(
        <div className="header">
            <a className="sheeny" href="https://etherscan.io/address/0x1f352473cafe221cf6b5802922275ac483154548"><img className="sheeny" src={Sheeny} alt="sheeny"/></a>
            <nav className="navbar">
                <div className="navbarButton"><a href="./" className="link">Home</a></div>
                <div className="navbarButton"><a href="./" className="link">Reading</a></div>
                <div className="navbarButton"><a href="./" className="link">Apps</a></div>
                <div className="socials">
                    <a href="https://twitter.com/Tomsheen22"><img src={Twitter} alt="twitter" className="social"/></a>
                    <a href="https://app.proofofhumanity.id/profile/0x1f352473cafe221cf6b5802922275ac483154548"><img src={PoH} alt="PoH" className="social"/></a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;