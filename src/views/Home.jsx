import { useEffect, useState } from "react";

import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import Collection from "../components/Collection";

import fetchShows from "../utils/shows.js";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [filterShows, setFilterShows] = useState([]);

  // this function will query the shows shown to the user by the name of the show and the year of permiere
  const filterQuery = (q) => {
    if (q == "") {
      setFilterShows(shows);
    } else {
      const temp = shows.filter((show) => {
        const name = show["show"]["name"];
        const year = show["show"]["premiered"].split("-")[0];
        return (
          name.toLowerCase().includes(q.toLowerCase()) ||
          year.toString().includes(q)
        );
      });

      setFilterShows(temp);
    }
  };

  // api used to fetch the shows details
  useEffect(() => {
    fetchShows(setShows, setFilterShows);
  }, []);

  return (
    <div className="bg">
      <div className="filter">
        <Heading></Heading>
        <SearchBar
          value={query}
          onChange={setQuery}
          filterQuery={filterQuery}
        ></SearchBar>
        {shows.length != 0 && (
          <h1 className={filterShows.length == 0 ? "big-text" : "subtitle"}>
            {filterShows.length == 0
              ? "Oops! We couldn't find the show"
              : "or let us help you pick one!"}
          </h1>
        )}
        <Collection filterShows={filterShows}></Collection>
      </div>
    </div>
  );
};

export default Home;
