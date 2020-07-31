import React, {useState} from 'react';
import AOS from 'aos';

import './home.css'
import StarfieldAnimation from 'react-starfield-animation'


import Particles from 'react-particles-js'

const Home = () => {
    const [ prop, setProp ] = useState(false)
    AOS.init()

    const Desc = ({ delay, text, iD}) => {
        return(
            <p 
                data-aos="fade-down"
                data-aos-delay={delay}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                className="home-text"
                id={iD}
            >
                {text}
            </p>
        )
    }
 
    return (
        <div className="home">
            <h1 data-aos="fade-up" id="rey">Reynold Urena.</h1>
            <div 
                className="home-attr" 
                style={{border: "1px solid black", overflow:"hidden"}}
            >
                <Desc delay="100" text="Developer"      iD="hDeveloper"/>
                <Desc delay="190" text="Photographer"   iD="hPhotographer"/>
                <Desc delay="260" text="Musician"       iD="hMusician"/>
            </div>
            <StarfieldAnimation
                style={{
                    position: 'absolute',
                    zIndex: "-5",
                    width: '100%',
                    height: '100%',
                    backgroundColor: "black"
                }}
                numParticles="50"
            />
        </div>
    )
}

export default Home
