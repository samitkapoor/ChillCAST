const url = "https://api.tvmaze.com/search/shows?q=all";

const fetchShows = (setShows, setFilterShows) => {
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      setShows(data);
      setFilterShows(data);
    })
    .catch((err) => console.log(err));
};

export default fetchShows;
