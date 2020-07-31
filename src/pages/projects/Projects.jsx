import React from 'react'

import SingleProject from './SingleProject'
import otg from '../../assets/gifs/OTG.gif'
import evented from '../../assets/gifs/Evented.gif'
import './project.css'
import '../../App.css'


const Projects = () => {

    return (
        <div id="projects">
            <div className="project-transition">
                <div data-aos="fade-down" id="proj-1" />  
                <div data-aos="fade-down" id="proj-2"/>
                <div data-aos="fade-down" id="proj-3"/>
                <div data-aos="fade-down" id="proj-4"/>
                <div data-aos="fade-down" id="proj-5"/>
                <div data-aos="fade-down" id="proj-6"/>
                <div data-aos="fade-down" id="proj-7"/>

            </div>
            <h1 
                data-aos="fade-up" 
                id="title-proj" 
                className="title"
            >
                    Projects
            </h1>
            <SingleProject 
                img={otg} 
                gitHubURL="https://github.com/ghostkid130/C37_final_on_the_go_shopping" 
                descText="On-The-Go-Shopping is a Web App designed to give the people the option to scan and checkout grocery from their use of their cell phone."
            />

            <hr 
                data-aos="flip-right" 
                data-aos-duration="3000"
                className="break"
            />

            <SingleProject 
                img={evented} 
                gitHubURL="https://github.com/ghostkid130/C37_midterm_elizabeth_fred_reynold" 
                descText="Evented is an entertainment app that helps the user find concert events in their local area by calling to the ticketMaster API, in a simple and user friendly way."
            />
           


        </div>

    )
}

export default Projects
