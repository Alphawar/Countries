const BASE_URL = 'https://restcountries.com/v2/';

export const GET_ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;
export const searchCountryByName = name => `${BASE_URL}name/${name}`
export const filterCountriesByCode = codes => `${BASE_URL}alpha?codes=${codes?.join(',')}`