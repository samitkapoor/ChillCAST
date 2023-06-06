import React from "react";

const Genres = ({ genres }) => {
  return (
    <div className="genres">
      {genres.map((genre) => {
        return (
          <p key={crypto.randomUUID()} className="genre">
            {genre}
          </p>
        );
      })}
    </div>
  );
};

export default Genres;
