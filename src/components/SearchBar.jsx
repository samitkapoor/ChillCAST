import React from "react";

const SearchBar = ({ value, onChange, filterQuery }) => {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search your favorite TV Show"
      value={value}
      onChange={(q) => {
        onChange(q.target.value);
        filterQuery(q.target.value);
      }}
    />
  );
};

export default SearchBar;
