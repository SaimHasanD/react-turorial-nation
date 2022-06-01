import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {

    const { countryName } = useParams();

    const [country, setCountry] = useState({});
    console.log(country);
    console.log(country.languages);
    const { name, capital, area, region, flags } = country;

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0]);
            })
    }, [])

    const countryStyle = {
        border: '2px solid goldenrod',
        borderRadius: '10px',
        padding: '10px'
    }

    return (
        <div style={countryStyle}>
            <h1>Details of {countryName}</h1>
            <img src={flags?.png} alt="" />
            <h1>Official name is: {name?.official}</h1>
            <h3> Capital is: {capital}</h3>
            <h4> region is: {region}</h4>
            <p> Area is: {area} square kilometers</p>
            <Link to='home'><button>Go Back Home</button></Link>

        </div>
    );
};

export default CountryDetails;