import React from 'react';
import classes from './CountryInfo.module.css';
import { useNavigate } from 'react-router-dom';

const CountryInfo = ({country, borderCountries}) => {

    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
    } = country

    const history = useNavigate()

    return (
        <section className={classes.info}>
            <img className={classes.info__flag} src={flag} alt={name} />
            <div>
                <h1 className={classes.info__title}> {name} </h1>
                <div className={classes.info__wrapper}>
                    <ul className={classes.info__main}>
                        <li><strong>Native Name:</strong> {nativeName} </li>
                        <li><strong>Population:</strong> {population} </li>
                        <li><strong>Region:</strong> {region} </li>
                        <li><strong>Sub region:</strong> {subregion} </li>
                        <li><strong>Capital:</strong> {capital} </li>
                    </ul>
                    <ul className={classes.info__additional}>
                        <li><strong>Top level Domain:</strong>
                        {topLevelDomain.map( el => 
                            <span key={el}> {el} </span>
                        )}</li>
                        <li><strong>Currency:</strong>
                        {currencies.map( el => 
                            <span key={el.code}> {el.name} </span>
                        )}</li>
                        <li><strong>Languages:</strong>
                        {languages.map( el => 
                            <span key={el.name}> {el.name} </span>
                        )}</li>
                    </ul>
                    <div className={classes.info__countries}>
                        <strong>Border Countries</strong>
                        {!borderCountries.length ? (
                            <span>There is no border countries</span>
                        ) :
                        (
                            <div className={classes.info__countries_container}>
                                {borderCountries.map( el => (
                                    <span onClick={() => history(`/country/${el}`)} key={el} className={classes.info__country}> {el} </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CountryInfo;