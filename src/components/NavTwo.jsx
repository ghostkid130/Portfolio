import React, { useContext, useRef } from 'react'
import { Link } from 'react-scroll'
import './navTwo.css'

import { VisibilityContext } from '../context/VisibilityContext'



const Nav = () => {
    const { visibilityState } = useContext(VisibilityContext)
    const line = useRef()


    return (
        <div className="navContainer-a">
            <div style={{position:"relative"}}>
                <ul id="nav" ref={line}>
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
                    // style={{ height:`${{ (window.innerHeight * .4)} * visibilityState}px`}} 
                />
                    {console.log(line)}
            </div>
        </div>
    )
}

export default Nav
