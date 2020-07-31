import React from "react"
import { SocialIcon } from 'react-social-icons'


const SingleProject = ({img, descText, gitHubURL}) => {
    return(
        <div className="project">
            <img 
                data-aos="fade-down-right" 
                data-aos-duration="2000"
                src={img}
                alt="On-The-Go Shopping"
            />
            <div className="description">
                <p 
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                >
                    {descText}
                </p>
                <div className="socialIcons"> 
                    <SocialIcon 
                    data-aos="zoom-in-down" 
                    url={gitHubURL} network="github" />
                </div>
            </div>
        </div>
    )
}

export default SingleProject