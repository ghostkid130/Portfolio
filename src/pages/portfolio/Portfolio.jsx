import React from 'react'
import './portfolio.css'
import otg from '../../assets/portfolio/otg.png'
import evented from '../../assets/portfolio/evented.png'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>Projects</h1>
            <div className="project-container">
                <img 
                    src={otg} 
                    alt="On-The-Go Shopping"
                    className="project-item"/>
                <img 
                    src={evented} 
                    alt="On-The-Go Shopping"
                    className="project-item"/>
            </div>
        </div>
    )
}

export default Portfolio
