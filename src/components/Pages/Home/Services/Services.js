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
        <div> 
             <h2 className='text-center mt-5'> SERVICES </h2>
        <div id='services' className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 g-4"'>
       
        {
            services.map(service => <Service
            key={service.key}
            service={service}
            ></Service>)
        }
    </div>
    </div>
    );
};

export default Services;