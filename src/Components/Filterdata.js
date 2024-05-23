import React, { useContext } from "react";
import CityCard from "./CityCard.js"; // Assuming CityCard component is available
import { SearchContext } from "../Pages/Home";

function Filterdata() {
  let renderedContent;
  const { userInput, apiData } = useContext(SearchContext);

  if (userInput === "") {
    renderedContent = apiData.map((city, index) => (
      <CityCard
        key={index}
        name={city.name}
        population={city.population}
        // Add more relevant city data properties here
      />
    ));
  } else {
    renderedContent = apiData
      .filter((city) => city.name.toLowerCase().includes(userInput.toLowerCase()))
      .map((city, index) => (
        <CityCard
          key={index}
          name={city.name}
          population={city.population}
          // Add more relevant city data properties here
        />
      ));
  }

  if (renderedContent.length === 0) {
    renderedContent = (
      <div
        style={{
          color: "red",
          fontSize: "20px",
          textAlign: "center",
          letterSpacing: "0.7px",
        }}
      >
        <p>No cities found matching your search criteria.</p>
      </div>
    );
  }

  return renderedContent;
}

export default Filterdata;
