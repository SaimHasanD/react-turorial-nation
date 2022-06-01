import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Nations = () => {

    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const countryCompStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap : '10px'
        
    }

    return (
        <div>
            <h1>Total Nations {countries.length}</h1>

            <div style={countryCompStyle}>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Nations;