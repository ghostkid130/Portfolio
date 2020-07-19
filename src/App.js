import React, { useContext, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor'
import { VisibilityContext } from './context/VisibilityContext'

import Home from './pages/home/Home'
import './App.css';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Nav from './components/NavTwo'

function App() {
  const { visibilityState, setVisibilityState } = useContext(VisibilityContext)
   

  function onChange(isVisible){
    console.log(isVisible)
    setVisibilityState({...visibilityState, [isVisible]: !visibilityState[isVisible]})
    console.log(visibilityState)
  }

  useEffect(() => {
    const height = document.body.offsetHeight - window.innerHeight
    window.addEventListener("scroll", () => {
      const v = (window.pageYOffset/height).toFixed(2)
      setVisibilityState(v);
      console.log(v)

    })
  }, [setVisibilityState] )

  return (
    <div>
      <Nav id="nav-abs"/>
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

    </div>
  );
}

export default App;
