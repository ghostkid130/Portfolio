import React from 'react'
import './about.css'

import design from '../../assets/about/design.png'
import code from '../../assets/about/code.png'
import love from '../../assets/about/love.png'

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <div className="about-qualification">
                <div className="about-items">
                    <img 
                        src={design}
                        alt="Design Logo"
                        className="about-logo"
                    />
                    <span>Efficient Design</span>
                </div>
                <div className="about-items">
                    <img 
                        src={code}
                        alt="Code Logo"
                        className="about-logo"
                    />
                    <span>Modular Code</span>
                </div>
                <div className="about-items">
                <img 
                        src={love}
                        alt="Love Logo"
                        className="about-logo"
                    />
                    <span>Crafted with Love</span>
                </div>
            </div>
            <div className="about-mid">
                <div id="about-left">
                    <h1>I am a Full Stack Web Developer. I have a passion for creating dynamic web solutions!</h1>
                </div>
                <div id="about-right">
                    <h1>JavaScript</h1>
                    <h1>MongoDB</h1>
                    <h1>ReactJS</h1>
                    <h1>Express</h1>
                    <h1>Material-UI</h1>
                </div>
            </div>
        </div>
    )
}

export default About
