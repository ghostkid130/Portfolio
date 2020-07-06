import React from 'react'
import { Link } from 'react-scroll'
import Nav from '../../components/Nav'
import './home.css'

import GitHub from '../../assets/GitHub-Logos/GitHub-Mark-64px.png'
import LinkedIn from '../../assets/LinkedIn-Logos/linkedin-logo-white.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from 'react-social-icons'

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home-container">
                <div className="navML">
                    <SocialIcon className="icon" url="https://linkedin.com/in/reynoldu" />
                    <SocialIcon className="icon" url="https://github.com/ghostkid130"/>
                </div>

                <div id="tci">
                    <h1>Reynold Urena </h1>
                    <p>Full Stack Web Developer!</p>
                </div>
            
                        
                
            </div>
        </div>
    )
}

export default Home
