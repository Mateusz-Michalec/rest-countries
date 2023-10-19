import React from "react";
import { SearchBarWrapper, SearchInput } from "./style";
import SearchIcon from "./icons/SearchIcon";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchIcon />
      <SearchInput placeholder="Search for a country..." />
    </SearchBarWrapper>
  );
};

export default SearchBar;
