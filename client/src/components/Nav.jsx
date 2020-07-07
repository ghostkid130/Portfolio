/**@jsx jsx */
import React from 'react'
import { Link } from 'react-scroll'
import { jsx, css, Global, ClassNames } from '@emotion/core'
import './components.css'
const Nav = () => {
    return (
        <div className="navContainer">
            <div className="navL">
                <h1>Rey</h1>
            </div>
            <div 
                className="navMenu" 
                css={css`
                    
                `}
            >
                <ul id="nav" 
                    css={css`
                        &:after: {
                            content: '',
                            position: 'absolute',
                            borderRight: '1px solid green',
                            height: '400px',
                            width: '0px',
                            top: '3px',
                            right: '.75rem',
                            zIndex: '0'
                        }
                    `}
                    >
                    <p>Home</p>
                    <li></li>
                    <p>About</p>
                    <li></li>
                    <p>Projects</p>
                    <li></li>
                    <p>Contact</p>
                    <li></li>
                </ul>
                {/* <Link smooth={true} duration={250} to="about">
                    <h1>About</h1>
                </Link>
                <Link smooth={true} duration={250} to="portfolio">
                    <h1>Projects</h1>
                </Link>
                <Link smooth={true} duration={250} to="contact">
                    <h1>Contact</h1>
                </Link> */}
            </div>
        </div>
    )
}

export default Nav
