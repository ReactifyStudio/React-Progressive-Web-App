import React from 'react'

// import IntroSection from './components/intro/Intro'
// import ContactSection from './components/contact-section/ContactSection'
import Map from './components/map/Map' // import the map here
// import DisclaimerSection from './components/disclaimer/Disclaimer'
// import FooterSection from './components/footer/Footer'

import './App.css'

const location = {
  address: 'Juja Kwale, Rd, Juja',
  lat: -1.100396/*37.42216*/,
  lng: 37.014533/*-122.08427*/,
} // our location object from earlier

const App = () => (
  <div className="App">
    {/* <IntroSection />
    <ContactSection /> */}
    <Map location={location} zoomLevel={15} /> {/* include it here */}
    {/* <DisclaimerSection />
    <FooterSection /> */}
  </div>
)

export default App