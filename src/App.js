import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  HashRouter,
  BrowserRouter
} from 'react-router-dom'

import { Link, Element , Events, animateScroll 
      as scroll, scrollSpy, scroller 
  } from 'react-scroll'

import Home from './pages/home/Home'
import './App.css';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Home name="home"/>
      <About name="about"/>
      <Portfolio name="portfolio"/>
      <Contact name="contact"/>
    </>
  );
}

export default App;
