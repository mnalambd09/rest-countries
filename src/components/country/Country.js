import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, area, region, population} = props.country || ''
    return (
        <div className='country'>
            <h1>{name}</h1>
            <img src={flags.png} alt="" />
            <p>population{population}</p>
            <strong>Area: {area}</strong> <br />
            <strong>Region: {region}</strong> <br />
            <button className='btn-select'>Select Country <FontAwesomeIcon icon={faCoffee} /></button>
            
        </div>
    );
};

export default Country;