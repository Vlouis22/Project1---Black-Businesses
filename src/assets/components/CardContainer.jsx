import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import Data from '../data';

export const CardContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);



    function getBusinesses() {
        return data.map((business, index) => (
            <Card 
                key={index}
                name={business.name} 
                image={business.image} 
                rating={business.rating}
                website={business.website}
            />
        ));
    }

    return (
        <div className='card--container'>
            {getBusinesses()}
        </div>
    );
};
