import { useEffect, useState } from "react";

import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import Show from "./components/Show";

import fetchShows from "./utils/shows.js";

const App = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [filterShows, setFilterShows] = useState([]);

  const filterQuery = (q) => {
    if (q == "") {
      setFilterShows(shows);
    } else {
      const temp = shows.filter((show) => {
        return show["show"]["name"].toLowerCase().includes(q.toLowerCase());
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
        <h1 className={filterShows.length == 0 ? "big-text" : "subtitle"}>
          {filterShows.length == 0
            ? "Oops! We couldn't find the show"
            : "or let us help you pick one!"}
        </h1>
        <div className="collection">
          {filterShows.length != 0 &&
            filterShows.map((show) => {
              const imageUrl = show["show"]["image"]["medium"];
              const name = show["show"]["name"];
              const rating = show["show"]["rating"]["average"];
              const genres = show["show"]["genres"];
              const date = show["show"]["premiered"].split("-")[0];
              return (
                <Show
                  imageUrl={imageUrl}
                  name={name}
                  rating={rating}
                  genres={genres}
                  date={date}
                ></Show>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
