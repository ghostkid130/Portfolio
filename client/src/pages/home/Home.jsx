import React from 'react'
import { Link } from 'react-scroll'
import Nav from '../../components/Nav'
import './home.css'

import GitHub from '../../assets/GitHub-Logos/GitHub-Mark-64px.png'
import LinkedIn from '../../assets/LinkedIn-Logos/linkedin-logo-white.png'

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="home-container">
                <div className="navML">
                    <div>
                        <img 
                            id="linkedIn" 
                            src={LinkedIn}
                            alt="LinkedIn Profile"
                        />
                        <img 
                            id="gitHub"
                            src={GitHub}
                            alt="GitHub Profile" 
                        />
                    </div>
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
