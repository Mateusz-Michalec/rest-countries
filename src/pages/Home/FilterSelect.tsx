import React, { useEffect, useState } from "react";
import { RegionSelector, RegionSelectorWrapper } from "./style";
import SelectArrowIcon from "./icons/SelectArrowIcon";
import { HomeInputs } from ".";
import { Country } from "./CountriesList";

const FilterSelect = ({ setCountries, initialCountries }: HomeInputs) => {
  const [regions] = useState([
    ...new Set(initialCountries?.map((country: Country) => country.region)),
  ]);

  const [region, setRegion] = useState("DEFAULT");

  const filterByRegion = () =>
    setCountries(
      initialCountries?.filter((country) => country.region === region)
    );

  useEffect(() => {
    if (region !== "DEFAULT") filterByRegion();
  }, [region]);

  return (
    <RegionSelectorWrapper>
      <RegionSelector
        onChange={(e) => setRegion(e.target.value)}
        defaultValue={region}
      >
        <option value={region} hidden disabled>
          Filter by Region
        </option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </RegionSelector>
      <SelectArrowIcon />
    </RegionSelectorWrapper>
  );
};

export default FilterSelect;
