import axios from "axios";

const url = "https://api.tvmaze.com/search/shows?q=all";

const fetchShows = (setShows, setFilterShows) => {
  axios.get(url).then((response) => {
    setShows(response.data);
    setFilterShows(response.data);
  });
};

export default fetchShows;
