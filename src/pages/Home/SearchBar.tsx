import React, { useEffect, useState } from "react";
import { SearchBarWrapper, SearchInput } from "./style";
import SearchIcon from "./icons/SearchIcon";
import { HomeInputs } from ".";

const SearchBar = ({ setCountries, initialCountries }: HomeInputs) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setCountries(
      initialCountries?.filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input]);

  return (
    <SearchBarWrapper>
      <SearchIcon />
      <SearchInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a country..."
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
