import React,{useState, useEffect} from 'react';
import axios from 'axios'

const CountryService =()=>{

    const [country, setCountry] = useState(null);

    const getCountry=async()=>{

        try {

            const apiUrl = 'https://restcountries.com/v3.1/all'
            const res = await axios.get(apiUrl);
            setCountry(res.data);


            console.log(res.data)
            
        } catch (error) {
            
        }

    };

    useEffect(()=>{
       getCountry();
    },[])


    


return{country}

}
export default CountryService;