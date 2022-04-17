import React from 'react';
import  { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
         fetch('services.json')
         .then(res => res.json())
         .then(data =>setServices(data))
    },[])
    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 g-4"'>
        {/* <h2 className='text-center'> SERVICES </h2> */}
        {
            services.map(service => <Service
            key={service.key}
            service={service}
            ></Service>)
        }
    </div>
    );
};

export default Services;