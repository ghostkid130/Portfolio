import React from 'react'
import { Link } from 'react-scroll'
import './components.css'
const Nav = () => {
    return (
        <div className="navContainer">
            <div className="navL">
                <h1>Rey</h1>
            </div>
            <div className="navMenu">
                <Link smooth={true} duration={250} to="about">
                    <h1>About</h1>
                </Link>
                <Link smooth={true} duration={250} to="portfolio">
                    <h1>Projects</h1>
                </Link>
                <Link smooth={true} duration={250} to="contact">
                    <h1>Contact</h1>
                </Link>
            </div>
        </div>
    )
}

export default Nav
