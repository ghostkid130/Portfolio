import React, { useContext, useRef, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import { VisibilityContext } from './context/VisibilityContext'

import Home from './pages/home/Home'
import './App.css';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  const { visibilityState, setVisibilityState } = useContext(VisibilityContext)

   

  function onChange(isVisible){
    console.log(isVisible)
    setVisibilityState({...visibilityState, [isVisible]: !visibilityState[isVisible]})
    console.log(visibilityState)
  }

  useEffect(() => {
    window.addEventListener("scroll", console.log("Scrool"))
  }, [] )



  return (
    <>
      <VisibilitySensor onChange={() => onChange("home")}>
        <Home name="home"/>
      </VisibilitySensor>

      <VisibilitySensor onChange={() => onChange("about")}>
        <About name="about"/>
      </VisibilitySensor>

      <VisibilitySensor onChange={() => onChange("portfolio")}>
        <Portfolio name="portfolio"/>
      </VisibilitySensor>

      <VisibilitySensor onChange={() => onChange("contact")}>
        <Contact name="contact"/>
      </VisibilitySensor>

    </>
  );
}

export default App;