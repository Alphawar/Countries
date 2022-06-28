import React from 'react';
import classes from './CountryList.module.css';
import CountryItem from './CountryItem/CountryItem';
import { useNavigate } from 'react-router-dom';

const CountryList = ({filteredCountries}) => {

    const history = useNavigate()

    return (
        <section className={classes.listWrapper}>
            {filteredCountries.map( country => {
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                title: 'Popultaion',
                description: country.population.toLocaleString()
                },
                {
                  title: 'Region',
                  description: country.region
                },
                {
                  title: 'Capital',
                  description: country.capital
                }
              ],
            }
            return (
              <CountryItem handleClick={() => history(`/country/${country.name}`)} key={country.name} country={countryInfo}/>
            )
          })}
        </section>
    );
};

export default CountryList;