import React from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from '../CountryDetails/CountryDetails';
import './country.css'


const Country = (props) => {
   const {name,flag,alpha3Code}=props.country
    return (
        <div className="countryInfo">
            <img src={flag} alt=""/>
            <h3>{name}</h3>
            <p> <Link to={`/countryDetails/${name}`}>show detail of:{name}</Link></p>
           

        </div>     
       
    );
};

export default Country;