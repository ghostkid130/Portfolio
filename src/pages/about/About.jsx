import React, { useState, useContext } from 'react'
import './about.css'
import { RenderStatus, RenderStatusContextProvider } from '../../context/RenderStatus'
import { render } from '@testing-library/react'

import { useHistory } from 'react-router-dom'



const About = () => {
    const history = useHistory()
    const [ click, setClick ] = useState(false)
    const { loadBio, setLoadBio } = useContext(RenderStatus)
    const [ test, setTest ] = useState(false)


    const Desc = ({ delay, text, id, trans}) => {
        return(
            <p 
                id={`intro-${id}`}
                data-aos={trans}
                data-aos-delay={delay}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
            >
                {text}
            </p>
        )
    }
    const Trick = ({ delay, text, id, trans}) => {
        return(
            <p 
                id={`intro-${id}`}
                data-aos={trans}
                data-aos-delay={delay}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
            >
                {text}<span id={click ? "span-true" : "span-false"}>nold Urena</span>
            </p>
        )
    }
    const Question = ({ delay, text, id, trans}) => {
        return(
            <p 
                onClick={() => next()}
                id={`intro-${id}`}
                data-aos={trans}
                data-aos-delay={delay}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
            >
                {text}
            </p>
        )
    }
    function next(){
        console.log("Clicked")
        setClick(true)
    }



    React.useEffect( () => {
        setTimeout( () => { return setLoadBio(true)}
        , 6000 )
    }, [click] )

    return (
        <div className="about">
            <div id="rey-intro">
                {console.log("Test", loadBio)}
                {!click && <Desc       id="1" delay="100" text="So"      trans="fade-down"/>}
                {click && <p id="intro-1">So</p>}

                {!click && <Desc       id="2" delay="300" text="Who's"   trans="fade-down"/>}
                {click && <p id="intro-2">Who's</p>}

                {click && 
                    <p id="intro-3">
                        Reyn
                            <span id="reyO" className={click ? "grow-o" : "" }>
                                o
                            </span>
                        old Urena
                    </p>} 
                {!click && <Trick      id="3" delay="500" text="Rey"     trans="fade-up" />}
                {click && <p id="intro-4">?</p>}
                {!click && <Question   id="4" delay="800" text="?"       trans="fade-up"/>
            }

            </div>
        </div>
    )
}

export default About
