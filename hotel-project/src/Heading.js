import React from "react";
import Clock from "./Clock";

const Heading = () => {
  return (
    <header className="App-header">
      <img
        className="App-logo"
        src="http://bitcoinrumble.com/wp-content/uploads/colorful-brand-logo-design-psd-file-free-download-free-logos-design.jpg"
      />
      CYF Hotel
      <Clock />
    </header>
  );
};

export default Heading;
