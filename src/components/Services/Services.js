import React, { useEffect, useState } from 'react';
const Services = () => {
    const [servicess, setServicess] = useState([]);
    useEffect(() => {
         fetch('./dataaa.json')
             .then(res => res.json())
             .then(data => setServicess(data))
    },([]))

    return (
        <div>
           
            <div className="container all-teams mt-5 mb-5">
      <div className="all-team">
        <h1 className="text-center mb-5 mt-5 text-danger">Our Services</h1>
      </div>
      <div className="teams">
        <div div className = "row row-cols-1 row-cols-md-2 g-4" >
          {servicess?.map((service) => (
           <div class="col">
    <div className="card bg-dark">
      <img src={service.image}  className="card-img-top cart" alt="..."/>
      <div className="card-body">
                          <h5 className="card-title text-white">{service.coursename}</h5>
                          <p className="card-text text-white">{service.coursedetails}</p>
                          <p className="text-white">Course Fee :{service.coursefee} Taka</p>
      </div>
    </div>
  </div>
          ))}
        </div>
      </div>
    </div> 
     </div>
    );
};

export default Services;