import React from "react";

const Footer = props => {
  const arrayHere = props.array1;
  const array = arrayHere.map((item, index) => <li key={index}>{item}</li>);
  return <ul className="footer">{array}</ul>;
};

export default Footer;
