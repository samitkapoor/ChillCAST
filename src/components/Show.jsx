import React from "react";

const Show = (props) => {
  return (
    <div className="show" key={crypto.randomUUID()}>
      <img className="poster" src={props.imageUrl} alt="" />
      <div className="poster-overlay">
        <div className="date">{props.date}</div>
        <div className="show-name">
          {props.name}&nbsp;&nbsp;
          {props.rating != null && (
            <span className="show-score">{props.rating}/10</span>
          )}
        </div>
        <div className="genres">
          {props.genres.map((genre) => {
            return (
              <p key={crypto.randomUUID()} className="genre">
                {genre}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Show;
