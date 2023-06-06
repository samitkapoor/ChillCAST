import { useEffect, useState } from "react";

import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import Show from "./components/Show";

import fetchShows from "./utils/shows.js";

const App = () => {
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
