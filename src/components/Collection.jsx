import React from "react";

import { useNavigate } from "react-router-dom";

import Show from "../components/Show";

const Collection = ({ filterShows }) => {
  const navigate = useNavigate();
  return (
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
              onClick={() => {
                navigate("/show", {
                  state: {
                    props: show,
                  },
                });
              }}
              imageUrl={imageUrl}
              name={name}
              rating={rating}
              genres={genres}
              date={date}
            ></Show>
          );
        })}
    </div>
  );
};

export default Collection;
