import axios from "axios";

const url = "https://api.tvmaze.com/search/shows?q=all";

const fetchShows = (setShows) => {
  axios.get(url).then((response) => {
    setShows(response.data);
  });
};

export default fetchShows;
