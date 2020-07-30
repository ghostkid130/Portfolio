import React from 'react'
import otg from '../../assets/gifs/OTG.gif'
import evented from '../../assets/gifs/Evented.gif'

import './project.css'
import '../../App.css'
import { SocialIcon } from 'react-social-icons'

import AOS from 'aos';


const Projects = () => {
    return (
        <div id="projects">
            <h1 className="title">Projects</h1>

            <div className="project">
                <img 
                    data-aos="fade-down-right" 
                    src={otg}
                    alt="On-The-Go Shopping"
                />
                <div className="description">
                    <p data-aos="zoom-in-up">
                        On-The-Go-Shopping is a Web App designed to give the people the option to scan and checkout grocery from their use of their cell phone.
                    </p>
                    <div className="socialIcons"> 
                        <SocialIcon 
                        data-aos="zoom-in-down" 
                        url="https://github.com/ghostkid130/C37_final_on_the_go_shopping" network="github" />
                    </div>
                </div>
            </div>

            <div className="project">
                <img 
                    data-aos="fade-down-left" 
                    src={evented}
                    alt="Evented"
                />
                <div className="description">
                    <p data-aos="zoom-in-up">
                        Evented is an entertainment app that helps the user find concert events in their local area by calling to the ticketMaster API, in a simple and user friendly way.
                    </p>
                    <div className="socialIcons"> 
                        <SocialIcon 
                        data-aos="zoom-in-down" 
                        url="https://github.com/ghostkid130/C37_midterm_elizabeth_fred_reynold" network="github" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Projects
