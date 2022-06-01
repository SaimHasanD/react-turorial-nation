import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 Results Not Found</h1>
            <Link to='home'><button>Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;