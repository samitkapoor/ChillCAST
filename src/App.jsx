import { useEffect, useState } from "react";

import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";

import fetchShows from "./utils/shows.js";

const App = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");

  // api used to fetch the shows details
  useEffect(() => {
    fetchShows(setShows);
  }, []);

  return (
    <div className="bg">
      <div className="filter">
        <Heading></Heading>
        <SearchBar value={query} onChange={setQuery}></SearchBar>
        <h1 className="big-text">Our collection</h1>
        <div className="collection">
          {shows.length != 0 &&
            shows.map((show) => {
              const imageUrl = show["show"]["image"]["medium"];
              return (
                <div className="" key={crypto.randomUUID()}>
                  <img src={imageUrl} alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
