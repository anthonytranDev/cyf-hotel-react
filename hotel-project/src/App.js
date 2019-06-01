import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <div className="cardContainer">
          <TouristInfoCards
            source="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg"
            link="https://peoplemakeglasgow.com"
            paragraph="Find out why you should visit Glasgow! With something for everyone, this vibrant city has so much going on, here's why you should make your next city break  "
            cityName="Glassgow"
            linkname="visit Glasgow"
          />
          <TouristInfoCards
            source="https://omghcontent.affino.com/AcuCustom/Sitename/DAM/084/manchester-main-MIN.jpg"
            link="https://visitmanchester.com"
            paragraph="We have reviews of the best places to see in Manchester. Visit top-rated & must-see attractions. ... Manchester Hop-On Hop-Off Bus Sightseeing Tour. Hop-on"
            cityName="Manchester"
            linkname="visit Manchester"
          />
          <TouristInfoCards
            source="https://secure.i.telegraph.co.uk/multimedia/archive/02423/london_2423609b.jpg"
            link="https://visitlondon.com"
            paragraph="Welcome to Visit London, your official city guide to London, England. Find things to do in London, days out in London, London attractions and sightseeing, . "
            cityName="london"
            linkname="visit London"
          />
        </div>
        <Bookings />
        <Restaurant />
        <Footer
          array1={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789"
          ]}
          me="footer"
        />
      </div>
    );
  }
}

export default App;
