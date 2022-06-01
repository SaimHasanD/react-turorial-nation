import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <Link to="home"><button>Home</button></Link>
                <Link to="countries"><button>Countries</button></Link>
                <Link to="about"><button>About</button></Link>
            </div>
        </div>
    );
};

export default Header;