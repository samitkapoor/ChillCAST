import { useState } from "react";

import { useLocation } from "react-router-dom";

import Genres from "../components/Genres";
import Summary from "../components/Summary";
import Form from "../components/Form";

const Show = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    if (showForm) setShowForm(false);
    else setShowForm(true);
  };

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
  var time, days;
  if (showData["show"]["network"] != null) {
    time = showData["show"]["schedule"]["time"];
    days = showData["show"]["schedule"]["days"];
  }

  return (
    <div className="bg">
      <div className="division">
        <img className="show-poster" src={imageUrl} />
        <div className="information">
          <div className="show-date">
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
            <button
              onClick={() => {
                handleShowForm();
              }}
              className="btn"
            >
              Book Tickets
            </button>
          ) : (
            <a href={website} target="_blank">
              <button className="btn">Watch it on {channel}</button>
            </a>
          )}
          {showForm && (
            <Form
              movieName={name}
              language={language}
              time={time}
              days={days}
            ></Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Show;
