import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card" style={{ width: "24rem" }}>
      <img src={props.source} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 className="card-title">{props.cityName}</h5>
        <p className="card-text">{props.paragraph}</p>
        <a href={props.link} className="btn btn-primary">
          {props.linkname}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
