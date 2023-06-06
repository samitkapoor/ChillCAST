import React, { useEffect, useState } from "react";

// form to book tickets
const Form = ({ movieName, language, time, days }) => {
  const [quantity, setQuantity] = useState(1);
  const [day, setDay] = useState("");

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
    sessionStorage.setItem("quantity", e.target.value);
  };

  const handleDay = (e) => {
    setDay(e.target.value);
    sessionStorage.setItem("day", e.target.value);
  };

  useEffect(() => {
    var q = sessionStorage.getItem("quantity");
    var d = sessionStorage.getItem("day");

    if (q != null) {
      setQuantity(q);
    }
    if (d != null) {
      setDay(d);
    }
  }, []);

  return (
    <form className="buy-form">
      <label htmlFor="movie-name">Movie</label>
      <input disabled id="movie-name" type="text" value={movieName} />
      <label htmlFor="language">Language</label>
      <input disabled id="language" type="text" value={language} />
      <label htmlFor="quantity">No. of People</label>
      <input
        id="quantity"
        type="number"
        min="1"
        max="10"
        value={quantity}
        onChange={handleQuantity}
      />
      <label htmlFor="time">Time</label>
      <input disabled type="text" value={time} />
      <label htmlFor="day">Day</label>
      <select
        onChange={(e) => {
          handleDay(e);
        }}
        name="day"
        id="day"
        value={day}
      >
        <option value="-1">Select day</option>
        {days.map((day) => {
          return (
            <option key={crypto.randomUUID()} value={day}>
              {day}
            </option>
          );
        })}
      </select>
      <button disabled className="btn">
        Pay now
      </button>
    </form>
  );
};

export default Form;
