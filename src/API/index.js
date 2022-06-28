import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { GET_ALL_COUNTRIES, searchCountryByName, filterCountriesByCode } from "./config";

export const getCountries = async (setCountries, setFilteredCountries, setIsLoaded) => {
    setIsLoaded(false)
    setTimeout(async () => {
        const response = await axios.get(GET_ALL_COUNTRIES)
        setCountries(response.data)
        setFilteredCountries(response.data)
        setIsLoaded(true)
    }, 3000)
}

export const getCountryByName = async (name, setCountry, setBorderCountries, setIsLoaded, setError) => {
    setIsLoaded(false)
    setTimeout(async () => {
        try {
            const countryByName = await axios.get(searchCountryByName(name))
            setCountry(countryByName.data[0])
            console.log(123)
            if(countryByName.data[0].borders) {
                const CountriesNeighbors = await axios.get(filterCountriesByCode(countryByName.data[0]?.borders))
                setBorderCountries(CountriesNeighbors.data.map( country => country.name))
                setIsLoaded(true)
            }
            setError(null)
        } catch(e) {
            setError(e.message)
        }

    }, 3000)
}
