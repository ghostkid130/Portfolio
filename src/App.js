import React from 'react';
import Home from './pages/home/Home'
import './App.css';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Bio from './pages/bio/Bio'
import { Element } from 'react-scroll'



import { RenderStatus } from './context/RenderStatus'
import Contact from './pages/contact/Contact';

function App() {
  const { loadBio } = React.useContext(RenderStatus)
  return (
    <div>
      <Home />
      <Projects />
      {!loadBio &&  <About />         }
      {loadBio &&   <Bio name="bio"/> } 
      {loadBio &&   <Element  name="contact"> <Contact /> </Element>       }
    </div>
  );
}

export default App;
