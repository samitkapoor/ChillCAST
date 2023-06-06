import { useEffect, useState } from "react";

import Heading from "./components/Heading";
import SearchBar from "./components/SearchBar";
import Show from "./components/Show";

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
        <h1 className="subtitle">or let us help you pick one!</h1>
        <div className="collection">
          {shows.length != 0 &&
            shows.map((show) => {
              const imageUrl = show["show"]["image"]["medium"];
              const name = show["show"]["name"];
              const score = Math.trunc(show["score"] * 10);
              const genres = show["show"]["genres"];
              const date = show["show"]["premiered"].split("-")[0];
              return (
                <Show
                  imageUrl={imageUrl}
                  name={name}
                  score={score}
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
