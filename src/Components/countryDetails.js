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


    const nativeNames = countryDetail.name.nativeName;
    const [nativeNameKey, nativeNameValue] = Object.entries(nativeNames)[0];

    const lang = countryDetail.languages;
    const [languageKey, languageValue] = Object.entries(lang)[0];

    const getCurrencyDetails = () => {
        if (countryDetail.currencies) {
            return Object.entries(countryDetail.currencies).map(([currencyCode, currencyData]) => (
                <p key={currencyCode}><b>Currency:</b> {currencyData.name} </p>
            ));
        } else {
            return <p>No currency information available</p>;
        }
    };

    const getBorderCountries = () => {
        if (countryDetail.borders) {
            return countryDetail.borders.map((borderCode) => (
                <p key={borderCode}>{borderCode}</p>
            ));
        }
        else {
            return <div>-</div>
        }

    };

    return (
        <div>
            <div><NavBar /></div>

            <div>
                <div >

                    <button className='home-button' onClick={goBackHome}><FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", }} />  Back</button>

                </div>

                <div className='country-details-container'>
                    <div >
                        <img src={countryDetail.flags.png} alt='' className='countrydetails-image' />
                    </div>

                    <div className='country-details'>
                        <div>
                            <h2>{countryDetail.name.common}</h2>
                            <p><b>Native Name: </b>{nativeNameValue.official}</p>
                            <p><b>Population: </b>{countryDetail.population}</p>
                            <p><b>Region: </b>{countryDetail.region}</p>
                            <p><b>Sub Region: </b>{countryDetail.subregion}</p>
                            <p><b>Capital: </b>{countryDetail.capital}</p>

                            <p className='border-container'>
                                <p>Border Countries:</p>
                                <div className='border-grid'>

                                    {getBorderCountries()}

                                </div>
                            </p>
                        </div>
                        <div className='country-details-right'>
                            <p><b>Top level Domain: </b>{countryDetail.tld[0]}</p>
                            {getCurrencyDetails()}
                            <p><b>Languages:</b>{languageValue}</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default CountryDetails