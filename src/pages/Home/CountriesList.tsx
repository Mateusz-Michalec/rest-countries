import CountryCard from "./CountryCard";
import { CountriesListWrapper } from "./style";

export type Country = {
  flags: { svg: string; alt: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
  flag: string;
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: { [key: string]: string };
  borders: string[];
};

const CountriesList = ({ countries }: { countries: Country[] | undefined }) => {
  return (
    <CountriesListWrapper>
      {countries?.map((country: Country) => (
        <CountryCard
          key={country.flag}
          flag={country.flags.svg}
          flagAlt={country.flags.alt}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </CountriesListWrapper>
  );
};

export default CountriesList;
