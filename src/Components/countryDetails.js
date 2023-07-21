import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NavBar from './navBar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CountryDetails = () => {

    const { countryName } = useParams();
    const [countryDetail, setCountryDetails] = useState(null);
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate('/');
    }

    const getCountryDetails = async () => {

        try {

            const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
            const res = await axios.get(apiUrl)
            setCountryDetails(res.data[0]);

        } catch (error) {

            console.log(error.message);

        }

    }

    useEffect(() => {

        getCountryDetails();

    }, [countryName]);

    if (!countryDetail) {
        return <div> loading</div>;
    }



    return (
        <div>
            <div><NavBar /></div>


            <div >
                
                <button className='home-button' onClick={goBackHome}><FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} />  Back</button>

            </div>

            <h1>{countryDetail.name.common}</h1>
            <img src={countryDetail.flags.png} alt='' className='country-image' />
            <p>Population: {countryDetail.population}</p>
            <p>Region: {countryDetail.region}</p>
            <p>Capital: {countryDetail.capital}</p>


        </div>
    )
}

export default CountryDetails