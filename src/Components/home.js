import React from 'react'
import NavBar from './navBar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import CountryService from './countryService';


const Home = () => {

    const { country } = CountryService();
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const filteredCountries = country
        ? country.filter((countries) =>
            countries.name &&
            countries.name.common &&
            countries.name.common.toLowerCase().includes(name.toLowerCase())
        )
        : [];

    const navigateToCountryDetails = (countryName) => {
        navigate(`/country/${countryName}`);
    }

    return (
        <div className='App'>

            <div><NavBar/></div>
           
            <div className='filter-container' >
                <div className='search-container'>
                    <input className='search' type='text' value={name} onChange={(event) => setName(event.target.value)}
                        placeholder='Search for a country'
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} />
                </div>

                <div>
                    <select className='select'>
                        <option>All</option>
                    </select>
                </div>

                <div>

                </div>


            </div>

            <div className='grid'>
                {filteredCountries.map((countries) => (
                    <div className='country-list' key={countries.name.common}
                        onClick={() => navigateToCountryDetails(countries.name.common)}>


                        <img src={countries.flags.png} alt='' className='country-image' />
                        <p className='country-name'><b>{countries.name.common}</b></p>
                        <p><b>Population: </b>{countries.population}</p>
                        <p><b>Region: </b>{countries.region}</p>
                        <p><b>Capital: </b>{countries.capital}</p>


                    </div>

                ))}
            </div>


        </div>
    )
}

export default Home