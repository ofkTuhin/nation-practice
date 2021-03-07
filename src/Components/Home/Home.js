import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './home.css'

const Home = () => {
    const [country,setCountry]=  useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountry(data))
    },[])
    return (
      
        <div >
         <div className="countryload">{  country.map(country => <Country country={country}></Country>)}</div>
        </div>
    );
};

export default Home;