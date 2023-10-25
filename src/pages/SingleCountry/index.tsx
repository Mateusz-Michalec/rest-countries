import React, { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import countries from "../../api/countries";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BackButton,
  BigFlag,
  BorderButton,
  BorderButtonsWrapper,
} from "./style";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import { Country } from "../Home/CountriesList";

const SingleCountry = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const navigate = useNavigate();

  const { response, isLoading, isError, refetch } = useAxios({
    axiosInstance: countries,
    method: "GET",
    url: location.pathname.includes("code")
      ? `https://restcountries.com/v3.1/alpha/${pathname[2]}`
      : `https://restcountries.com/v3.1/name/${pathname[1]}`,
  });

  useEffect(() => {
    if (!isLoading) refetch();
  }, [location]);

  const iterateObj = (
    obj: Partial<Pick<Country, "languages" | "currencies">>
  ): string => {
    const stringArray = [];

    for (const prop in obj) {
      const data = (obj as any)[prop];
      if (data.hasOwnProperty("name")) stringArray.push(data.name);
      else stringArray.push(data);
    }

    return stringArray.join(", ");
  };

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowLeftIcon />
        <span>Back</span>
      </BackButton>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error</p>
      ) : response ? (
        <>
          <BigFlag src={response[0].flags.svg} alt={response[0].flags.alt} />
          <h2>{response[0].name.common}</h2>
          <br />
          <p>
            <b>Population:</b> {response[0].population}
          </p>
          <p>
            <b>Region:</b> {response[0].region}
          </p>
          <p>
            <b>Sub Region:</b> {response[0].subregion}
          </p>
          <p>
            <b>Capital: </b>
            {response[0].capital ? response[0].capital.join(", ") : "no data"}
          </p>
          <br />
          <p>
            <b>Top Level Domain:</b>{" "}
            {response[0].tld ? response[0].tld.join(", ") : "no data"}
          </p>
          <p>
            <b>Currencies: </b>
            {<span>{iterateObj(response[0].currencies)}</span>}
          </p>
          <p>
            <b>Languages: </b>
            {<span>{iterateObj(response[0].languages)}</span>}
          </p>
          <br />
          <h3>Border Countries:</h3>
          <BorderButtonsWrapper>
            {response[0].borders ? (
              response[0].borders.map((border) => (
                <Link key={border} to={`/code/${border}`}>
                  <BorderButton>{border}</BorderButton>
                </Link>
              ))
            ) : (
              <span>No borders</span>
            )}
          </BorderButtonsWrapper>
        </>
      ) : null}
    </>
  );
};

export default SingleCountry;
