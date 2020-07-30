import React from 'react';
import Home from './pages/home/Home'
import './App.css';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Bio from './pages/bio/Bio'
import VisibilitySensor from 'react-visibility-sensor'


import { RenderStatus } from './context/RenderStatus'

function App() {
  const { loadBio, setLoadBio } = React.useContext(RenderStatus)
  return (
    <div>
      <Home />
      <Projects />
      {!loadBio && <About /> }
      {/* {loadBio && <Bio name="bio"/> }  */}
      <Bio />
    </div>
  );
}

export default App;
