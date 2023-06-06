import React from "react";

import Genres from "./Genres";

// UI for each tv show
const Show = (props) => {
  return (
    <div
      onClick={() => props.onClick()}
      className="show"
      key={crypto.randomUUID()}
    >
      <img className="poster" src={props.imageUrl} alt="" />
      <div className="poster-overlay">
        <div className="date">{props.date}</div>
        <div className="show-name">
          {props.name}&nbsp;&nbsp;
          {props.rating != null && (
            <span className="show-score">{props.rating}/10</span>
          )}
        </div>
        <Genres genres={props.genres}></Genres>
      </div>
    </div>
  );
};

export default Show;
