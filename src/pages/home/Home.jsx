import React from 'react'
import { Link } from 'react-scroll'
import Nav from '../../components/Nav'
import './home.css'

import { SocialIcon } from 'react-social-icons'
import Particles from 'react-particles-js'

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="navML">
                    <SocialIcon className="icon" url="https://linkedin.com/in/reynoldu" />
                    <SocialIcon className="icon" url="https://github.com/ghostkid130"/>
                </div>

                <div id="tci">
                    <h1>Reynold Urena </h1>
                    <p>Full Stack Web Developer!</p>
                </div>

                <Nav />

            </div>

            

            <Particles 
                className="particles"
                width="100vw"
                height="100vh"

            />
        </div>
       
    )
}

export default Home
