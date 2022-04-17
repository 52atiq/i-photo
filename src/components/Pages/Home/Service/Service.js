import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name,price,image, description} = service;
    console.log(name);
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
         navigate(`/service/${id}`)
    }
    return (
        <div className="col mb-5">
    <div className="card h-100">
      <img style={{height:'200px'}} src= {image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text">{description}</p>
        <h4 className='text-center'>${price}</h4>
      </div>
     
        <button onClick={ () => navigateToServiceDetail(id)} className='btn btn-primary'>Book</button>
      
    </div>
    </div>
    );
};

export default Service;