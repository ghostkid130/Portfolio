import React from 'react'
import './bio.css'
import { useWindupString, WindupChildren, Pause } from "windups";
import { SocialIcon } from 'react-social-icons'



const Bio = () => {
    const [rey] = useWindupString("Rey")

    return (
        <div data-aos="fade-in" data-aos-duration="5000" id="bio">
            <div id="bio-2"> 
            <div id="bio-container">

                <h1 
                    id="bio-rey"
                    // data-aos="fade-down"
                >
                        <span 
                            data-aos="fade-down-right"
                            data-aos-duration="5000"
                        >R</span>
                        <span
                            data-aos="fade-down-right"
                            data-aos-duration="5000"
                            data-aos-delay="200"
                        >e</span>
                        <span
                            data-aos="fade-down-right"
                            data-aos-duration="5000"
                            data-aos-delay="400"                        
                        >y</span>
                </h1>
                <div> 
                    <p id="bio-text">Hi. I'm Reynold but call me Rey! I am a Full Stack Web Developer, spirited Musician and landscape photographer. When I am not developing you can find me either Traveling, Learning or acquiring a new hobby!
                    </p>
                </div>
                <div id="socialIcons">
                    <SocialIcon 
                        data-aos="fade-right"
                        url="https://github.com/ghostkid130"
                        network="github"
                    />
                    <SocialIcon
                        data-aos="fade-left"
                        url="https://www.linkedin.com/in/reynoldu/"
                        netowrk="linkedin"
                    />
                </div>

                <h1 
                    data-aos="fade-up"
                    id="bio-tech"
                >
                        Got any question?  
                        <span id="contact-contact">
                             Contact Me!
                        </span>
                </h1>
            </div>
            </div>
        </div>
    )
}

export default Bio
