import React, { useEffect, useState } from 'react';
import './Service.css'
const Service = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
        .then(data =>setService(data))
    },[])
    return (
      <div className="container all-teams mt-5 mb-5">
      <div className="all-team">
        <h1 className="text-center mb-5 mt-5 text-danger">Our Services</h1>
      </div>
      <div className="teams">
        <div div className = "row row-cols-1 row-cols-md-2 g-4" >
            {services?.map((service) => (
          
           <div class="col">
    <div class="card bg-dark">
      <img src={service.image} class="card-img-top cart" alt="..."/>
      <div class="card-body">
                          <h5 class="card-title text-white">{service.coursename}</h5>
                          <p class="card-text text-white">{service.coursedetails}</p>
                          <p className="text-white">Course Fee :{service.coursefee} Taka</p>
      </div>
    </div>
  </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Service;