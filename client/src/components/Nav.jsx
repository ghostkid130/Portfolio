import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import './components.css'

import { VisibilityContext } from '../context/VisibilityContext'



const Nav = () => {
    const { visibilityState } = useContext(VisibilityContext)


    return (
        <div className="navContainer">
            <div style={{position:"relative"}}>
                <ul id="nav">
                    <Link smooth={true} duration={250} to="home">
                        <p>Home</p>
                        </Link>
                        <Link smooth={true} duration={250} to="home">
                        <li></li>
                    </Link>

                    <Link smooth={true} duration={250} to="about">
                        <p>About</p>
                        </Link>
                        <Link smooth={true} duration={250} to="about">
                        <li></li>
                    </Link>

                    <Link smooth={true} duration={250} to="portfolio">
                        <p>Projects</p>
                        </Link>
                        <Link smooth={true} duration={250} to="portfolio">
                        <li></li>
                    </Link>

                    <Link smooth={true} duration={250} to="contact">
                        <p>Contact</p>
                        </Link>
                        <Link smooth={true} duration={250} to="contact">
                        <li></li>
                    </Link>
                </ul>
                <p id="test" 
                    style={{ height:`${165*visibilityState}px`}} />
            </div>
        </div>
    )
}

export default Nav
