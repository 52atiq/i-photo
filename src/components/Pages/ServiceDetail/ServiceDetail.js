import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
       <div>
           <h2>Welcome to details {serviceId}</h2>
            <div>
            <Link to='/checkout'  className='btn btn-primary'> Checkout</Link>
        </div>
       </div>
    );
};

export default ServiceDetail;