import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './Shop.css'

const Shop = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className='product-container'>
            <div className='item-container'>
               {
                countries.map(country => <Country 
                    key = {country.alpha3Code}
                    country = {country}
                    ></Country>)
               }
            </div>
            <div className='cart'>
                <div className="cartDetails">
                    <h1>Cart Summery</h1>
                    <p>Selected Items</p>
                    <p>Total Price:</p>
                    <p>Total Shipping:</p>
                    <p>Tax</p>
                    <strong>Grand Total</strong>
                </div>
            </div>
        </div>
        
        
    );
};

export default Shop;