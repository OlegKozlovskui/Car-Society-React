import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarFilter from '../CarFilter/CarFilter';
import Car from '../Car/Car';
import { fetchAllCars } from '../../../redux/actionts/carActions';

class CarList extends Component {
  componentDidMount() {
    this.props.fetchAllCars();
  }

  render() {
    const { carList } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <CarFilter />
          </div>
          <div className="col col-9">
            <div className="row">
              {carList.map((car, i) => <Car key={i} car={car} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchAllCars,
};

const mapStateToProps = state => ({
  carList: state.cars.carList
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);