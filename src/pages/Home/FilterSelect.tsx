import React, { useState } from "react";
import { RegionSelector, RegionSelectorWrapper } from "./style";
import SelectArrowIcon from "./icons/SelectArrowIcon";

const FilterSelect = () => {
  const [region, setRegion] = useState("");

  return (
    <RegionSelectorWrapper>
      <RegionSelector defaultValue={"DEFAULT"}>
        <option value="DEFAULT" hidden disabled>
          Filter by Region
        </option>
      </RegionSelector>
      <SelectArrowIcon />
    </RegionSelectorWrapper>
  );
};

export default FilterSelect;
