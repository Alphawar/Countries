import React, { useEffect, useState } from 'react';
import Controls from '../../components/Controls/Controls';
import CountryList from '../../components/CountryList/CountryList';
import { getCountries } from '../../API/index';
import Loader from '../../components/Loader/Loader';

const HomePage = ({ countries, setCountries}) => {

    const [filteredCountries, setFilteredCountries] = useState([])
    const [isLoaded, setIsLoaded] = useState(true)

    const handleSearch = (search, region) => {
        let data = [...countries]
        if(region) {
            data = data.filter( el => el.region.includes(region))
        }
        if(search) {
            data = data.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
    }

    useEffect(() => {
        if(!countries.length) {
            getCountries(setCountries, setFilteredCountries, setIsLoaded)
        }
    }, [setCountries, countries.length, countries])

    return (
        <>
            {isLoaded ?
            <>
                <Controls handleSearch={handleSearch}/>
                <CountryList filteredCountries={filteredCountries}/>
            </> : <Loader />
            }
        </>
    );
};

export default HomePage;