import React from 'react';
import { NavLink } from 'react-router-dom';
import './Teacher.css'
import student1 from '../../image/user-1.png'
import student2 from '../../image/user-2.png'
import student3 from '../../image/user-3.jpg';
const Teacher = () => {
    return (
      <div>
       
      <section className="container mt-5 mb-5">
        <h1 className="d-flex justify-content-center align-items-center">
          Happy <span className="text-color g-2 ps-2"> Clients says</span>
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          <div className="col col-12 col-md-6 col-lg-4 ">
            <div className="card card-size pt-5 ">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={student1}
                  className=""
                  alt="..."
                  width="149"
                  height="149"
                />
              </div>

              <div className="card-body justify-content-center align-items-center">
                <p className="card-text text-center">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <div
                  className = "d-flex justify-content-center align-items-center mb-2 text-danger"
                >
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star empty"></i>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <NavLink to=""></NavLink>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <h5>Rasel</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-4">
            <div className="card card-size pt-5">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={student2}
                  className=""
                  alt="..."
                  width="149"
                  height="149"
                />
              </div>

              <div className="card-body justify-content-center align-items-center">
                <p className="card-text text-center">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <div
                  className="d-flex justify-content-center align-items-center mb-2 text-danger">
                  <i className="fas fa-star filled "></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star empty"></i>
                </div>
                <div className="d-flex justify-content-center align-items-center">
              
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <h5>Shila</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-4">
            <div className="card card-size pt-5">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={student3}
                  className="rounded-circle"
                  alt="..."
                  width="149"
                  height="149"/>
              </div>

              <div className="card-body justify-content-center align-items-center">
                <p className="card-text text-center">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
                <div div className = "d-flex justify-content-center align-items-center mb-2 text-danger" >
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star filled"></i>
                  <i className="fas fa-star empty"></i>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                <NavLink to=""></NavLink>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <h5>Shopna</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Teacher;