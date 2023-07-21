import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import CountryService from './countryService';


const Home = () => {

    const { country } = CountryService();
    const [name, setName] = useState('');
    const navigate =  useNavigate();
  
    const filteredCountries = country
      ? country.filter((countries) =>
        countries.name &&
        countries.name.common &&
        countries.name.common.toLowerCase().includes(name.toLowerCase())
      )
      : [];
  
      const navigateToCountryDetails=(countryName)=>{
        navigate(`/country/${countryName}`);
      }
      
  return (
    <div>
        <div className='nav-country'>
          <p className='world'>Where in the world?</p>
          <p className='dark-mode'><FontAwesomeIcon icon={faMoon} style={{ color: "#dfe0e1", }} /> Dark Mode</p>
        </div>

        <div className='filter-container' >
          <div className='search-container'>
            <input className='search' type='text' value={name} onChange={(event) => setName(event.target.value)}
              placeholder='Search for a country'
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} />
          </div>

          <div>

          </div>


        </div>

        <div className='grid'>
          {filteredCountries.map((countries) => (
            <div className='country-list'key={countries.name.common}
            onClick={() => navigateToCountryDetails(countries.name.common)}>

              <div className='country-list'>
                <img src={countries.flags.png} alt='' className='country-image' />
                {countries.name.common}
                <p>Population: {countries.population}</p>
                <p>Region: {countries.region}</p>
                <p>Capital: {countries.capital}</p>
              </div> 
              
              </div>
            
          ))}
        </div>
        
        
        </div>
  )
}

export default Home