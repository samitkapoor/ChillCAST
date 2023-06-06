import React from "react";

import { useLocation } from "react-router-dom";

import Genres from "../components/Genres";
import Summary from "../components/Summary";

const Show = () => {
  const location = useLocation();
  const showData = location.state.props;
  const imageUrl = showData["show"]["image"]["original"];
  const name = showData["show"]["name"];
  const year = showData["show"]["premiered"].split("-")[0];

  const endYear =
    showData["show"]["ended"] == null
      ? 0
      : showData["show"]["ended"].split("-")[0];
  const country =
    showData["show"]["network"] == null
      ? showData["show"]["webChannel"]["country"]["name"]
      : showData["show"]["network"]["country"]["name"];
  const language = showData["show"]["language"];
  const genres = showData["show"]["genres"];
  const summary = showData["show"]["summary"];
  const channel =
    showData["show"]["network"] == null
      ? showData["show"]["webChannel"]["name"]
      : showData["show"]["network"]["name"];
  const website =
    showData["show"]["webChannel"] != null
      ? showData["show"]["webChannel"]["officialSite"]
      : "";
  const rating = showData["show"]["rating"]["average"];

  return (
    <div className="bg">
      <div className="filter division">
        <img className="show-poster" src={imageUrl} />
        <div className="information">
          <div className="date">
            {endYear === 0 ? year + "-Present" : year + "-" + endYear}
          </div>
          <div className="name">{name}</div>
          {rating != null && <div className="rating">{rating}/10</div>}
          <div className="country">{country}</div>
          <div className="language">
            Language: <span className="highlight">{language}</span>
          </div>
          <Genres genres={genres}></Genres>
          <Summary summary={summary}></Summary>
          {website == "" ? (
            <button disabled className="watch-btn">
              Watch it on {channel}
            </button>
          ) : (
            <a href={website} target="_blank">
              <button className="watch-btn">Watch it on {channel}</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Show;
