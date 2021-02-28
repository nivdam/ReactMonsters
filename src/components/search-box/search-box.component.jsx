import React from "react";

import "./search-box.style.scss";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type="search"
    className="search"
    name="filter"
    placeholder={placeholder}
    onChange={handleChange}
    id="searchBox"
  />
);
