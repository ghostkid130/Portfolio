import React from 'react'
import './bio.css'
import { useWindupString } from "windups";
import express from '../../assets/img/express.png'
import react from '../../assets/img/react.png'
import mongoLeaf from '../../assets/img/mongoLeaf.png'

const Bio = () => {
    const [bio1] = useWindupString("Hi. I'm Reynold but call me Rey!")
    const [bio2] = useWindupString("I am a Full Stack Web Developer, spirited Musician and landscape photographer. ")
    const [rey] = useWindupString("Rey")
    return (
        <div data-aos="fade-in" id="bio">
            <div id="bio-container">
                <h1 id="bio-rey">{rey}</h1>

                <div style={{border:"1px solid black"}}> 
                    <p id="bio-text">Hi. I'm Reynold but call me Rey! I am a Full Stack Web Developer, spirited Musician and landscape photographer.
                    <br />
                    <br /> 
                    When I am not developing you can find me either Traveling, Learning or acquiring a new hobby!
                    </p>
                </div>

                <h1 id="bio-tech">Got any question? <span>Contact Me!</span></h1>

            </div>
        </div>
    )
}

export default Bio
