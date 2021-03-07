import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
 const {name}=useParams()
const[countries,setCountries]= useState([])
 useEffect(()=>{
    
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    
    
     .then(res=>res.json())
     .then(data=>setCountries(data[0]))
     
     
 },[])
    return (
        <div>
        <h3>name:{name}</h3>
        <p>name: {countries.name}</p>
        <table>
        <tr>
                        <th>Calling Code</th>
                        <td>+{countries.callingCodes && countries.callingCodes[0]}</td>
                    </tr>
        </table>
        </div>
    );
};

export default CountryDetails;