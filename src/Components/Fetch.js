import React, { useEffect, useState, useContext } from "react";
import Filterdata from "./Filterdata";
import Error from "./Error";
import Spinner from "./Spinner";
import { SearchContext } from "../Pages/Home";
import "../Styles/Fetch.css";

function Fetch() {
  const { userInput, regionChoice, setApiData, apiError, setApiError } = useContext(SearchContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3500/search-city?query=${userInput}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setApiData(data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          if (error.message === "Failed to fetch") {
            setApiError("No internet connection. Please check your network.");
          } else {
            setApiError("An error occurred while fetching data from the API.");
          }
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [userInput, regionChoice, setApiData, setApiError]);

  return (
    <section className="main-body-section">
      {loading && <div className="main-body-error"><Spinner /></div>}
      {!loading && apiError && <div className="main-body-error"><Error error={apiError} /></div>}
      {!loading && !apiError && <div className="main-body-container" data-aos="fade-up"><Filterdata /></div>}
    </section>
  );
}

export default Fetch;
