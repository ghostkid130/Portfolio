import React from 'react'
import './portfolio.css'
import '../cssTemplate.css'
import otg from '../../assets/portfolio/otg.png'
import evented from '../../assets/portfolio/evented.png'


const Portfolio = () => {
    return (
        <div className="portfolio container">
            <h1 >Projects</h1>
            <div className="projects-container">
                <div className="project">
                    <img 
                        src={otg} 
                        alt="On-The-Go Shopping"
                        className="project-item"
                    />
                    <p className="img-text">On-The-Go-Shopping is an web application designed allow shopping guest to engage in a mobile shopping experience.</p>
                </div>
                <div className="project">
                    <img 
                        src={evented} 
                        alt="On-The-Go Shopping"
                        className="project-item"
                    />
                    <p className="img-text">This is an entertainment app that helps the users find concert events in their local area through the use of TicketMaster's API.</p>

                </div>
            </div>
        </div>
    )
}

export default Portfolio
