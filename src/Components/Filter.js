import React, { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { SearchContext } from "../Pages/Home";
import "../Styles/Filter.css";

function Filter() {
  const { userInput, setUserInput } = useContext(SearchContext);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <section className="filter-results-container">
      <div className="filter-input" data-aos="fade-right">
        <input
          type="text"
          placeholder="Search for a city ..."
          id="cityNameInput"
          value={userInput}
          onChange={handleUserInput}
          name="City Name"
          title="Search for a city by name"
        />
        <BiSearchAlt id="searchIcon" title="Search Icon" />
      </div>
    </section>
  );
}

export default Filter;
