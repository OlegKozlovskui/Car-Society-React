import React from 'react';

import './Car.css';

const Car = ({ car }) => (
  <div className="col col-6">
    <div className="card car-card">
      <div className="card-header">{car.brand} {car.model}</div>
      <div className="card-body">
        <img src={`http://localhost:5000/${car.imageSrc}`} alt="log"/>
      </div>
    </div>
  </div>
);

export default Car;
