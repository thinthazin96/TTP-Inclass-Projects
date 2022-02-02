import React, {component} from "react";
import './resources/style.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueInfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background:'cornflowerblue' }}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venueNfo">
          <VunueNfo/>
        </Element>

        <Element name="highlights">
          <Highlight/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <Footer/>

      </div>

    );
  }
}

export default App;