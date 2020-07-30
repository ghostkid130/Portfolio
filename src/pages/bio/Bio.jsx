import React from 'react'
import './bio.css'
import { useWindupString } from "windups";


const Bio = () => {
    const [bio1] = useWindupString("Hi. I'm Reynold but call me Rey!")
    const [bio2] = useWindupString("I am a Full Stack Web Developer.")
    const [rey] = useWindupString("Reynold Urena")
    return (
        <div data-aos="fade-in" id="bio">
            <div id="bio-container">
                <h1>{rey}</h1>
                <p id="bio-text">{bio1}</p>
                <p id="bio-text">{bio2}</p>
                <div>
                    <h1>Tech Stack</h1>
                </div>
            </div>
        </div>
    )
}

export default Bio
