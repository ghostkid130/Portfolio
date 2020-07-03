import React from 'react'
import './about.css'

const About = () => {
    return (
        <div className="about">
            <h1>About</h1>
            <div className="about-qualification">
                <div className="about-items">
                    <spana>IMG 1</spana>
                    <span>Efficient Design</span>
                </div>
                <div className="about-items">
                    <spana>IMG 2</spana>
                    <span>Modular Code</span>
                </div>
                <div className="about-items">
                    <spana>IMG 3</spana>
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
