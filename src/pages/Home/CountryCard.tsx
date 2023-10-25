import React from "react";
import { CountryCardBody, CountryCardBrief } from "./style";
import { Link } from "react-router-dom";

type CountryCardProps = {
  flag: string;
  flagAlt: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
};

const CountryCard = ({
  flag,
  flagAlt,
  name,
  population,
  region,
  capital,
}: CountryCardProps) => {
  return (
    <Link to={`/${name}`}>
      <CountryCardBrief>
        <img src={flag} alt={flagAlt} />
        <CountryCardBody>
          <h2>{name}</h2>
          <br />
          <p>
            <b>Population:</b> {population}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital ? capital.join(", ") : "no data"}
          </p>
        </CountryCardBody>
      </CountryCardBrief>
    </Link>
  );
};

export default CountryCard;
