import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { getCountryByName } from '../../API';
import Loader from '../../components/Loader/Loader';
import classes from './CountryDetails.module.css';
import CountryInfo from '../../components/CountryInfo/CountryInfo';

const CountryDetails = () => {

    const { name } = useParams()
    const history = useNavigate()
    const [country, setCountry] = useState(null)
    const [borderCountries, setBorderCountries] = useState([])
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setErorr] = useState(null)

    useEffect(() => {
        getCountryByName(name, setCountry, setBorderCountries, setIsLoaded, setErorr)
    }, [name])

    useEffect(() => {
        error && history(`/NotFoundPage`)
    }, [error])

    return (
        <>
        {isLoaded ? 
        <div>
            <button className={classes.backButton} onClick={() => history(-1)}>
                <IoArrowBack /> Back
            </button>
            {country && <CountryInfo country={country} borderCountries={borderCountries}/>}
        </div>
        : <Loader/>}
        </>
    );
};

export default CountryDetails;