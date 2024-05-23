import React from "react";
import { Link } from "react-router-dom";

function CityCard(props) {
  return (
    <Link to={`/${props.name}`} title={props.name}>
      <div className="city-card">
        <div className="ctd-img">
          {/* Add city image if available */}
          <img src={props.image} alt={`${props.name} Image`} />
        </div>

        <div className="ctd-info">
          <p className="ctd-title">{props.name}</p>
          <p className="ctd-desc">
            <strong>Population: </strong>
            {props.population ? props.population.toLocaleString() : <span>--</span>}
          </p>
          <p className="ctd-desc">
            <strong>Region: </strong>
            {props.region ? props.region : <span>--</span>}
          </p>
          <p className="ctd-desc">
            <strong>Country: </strong>
            {props.country ? props.country : <span>--</span>}
          </p>
          {/* Add more relevant city data properties here */}
        </div>
      </div>
    </Link>
  );
}

export default CityCard;
