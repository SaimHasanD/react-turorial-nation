import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {

    const {name, capital, flags} = props.country;

    const countryStyle = {
        border: '2px solid goldenrod',
        borderRadius: '10px',
        padding: '10px'
    }

    const imgStyle = {
        maxHeight: '100px',
        maxWidth: '200px'
    }

    return (
        <div style={countryStyle}>
            <img style={imgStyle} src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <h5> Capital is {capital}</h5>
            <Link to={`/country/${name.common}`}><button>Details</button></Link>
            
        </div>
    );
};

export default Country;