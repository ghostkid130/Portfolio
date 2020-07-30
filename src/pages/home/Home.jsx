import React, {useState} from 'react';
import AOS from 'aos';

import './home.css'

import { SocialIcon } from 'react-social-icons'
import Particles from 'react-particles-js'

const Home = () => {
    const [ prop, setProp ] = useState(false)
    AOS.init()

    const Desc = ({ delay, text}) => {
        return(
            <p 
                data-aos="fade-down"
                data-aos-delay={delay}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
            >
                {text}
            </p>
        )
    }
 
    return (
        <div className="home">
            <h1 data-aos="fade-up" id="rey">Reynold Urena</h1>
            <div className="home-attr" style={{border: "1px solid black", overflow:"hidden"}}>
                <Desc delay="50" text="Developer" />
                <Desc delay="90" text="Photographer" />
                <Desc delay="160" text="Musician" />
            </div>
        </div>
    )
}

export default Home
