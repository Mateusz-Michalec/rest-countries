import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import FilterSelect from "./FilterSelect";
import CountriesList, { Country } from "./CountriesList";
import useAxios from "../../hooks/useAxios";
import countriesInstance from "../../api/countries";

export type HomeInputs = {
  setCountries: React.Dispatch<React.SetStateAction<Country[] | undefined>>;
  initialCountries: Country[] | undefined;
};

const Home = () => {
  const { response, isLoading, isError } = useAxios({
    axiosInstance: countriesInstance,
    method: "GET",
    url: "/all",
  });

  const [countries, setCountries] = useState(response);

  useEffect(() => {
    if (response) setCountries(response);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error</p>
      ) : (
        <>
          <SearchBar initialCountries={response} setCountries={setCountries} />
          <FilterSelect
            initialCountries={response}
            setCountries={setCountries}
          />
          <CountriesList countries={countries} />
        </>
      )}
    </>
  );
};

export default Home;
