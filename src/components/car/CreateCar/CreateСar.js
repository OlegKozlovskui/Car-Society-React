import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';

import './CreateCar.css';
import { createCar } from '../../../redux/actionts/carActions';

class CreateCar extends Component {
  state = {
    brand: '',
    model: '',
    year: '',
    maxSpeed: '',
    power: '',
    price: '',
    imageSrc: '',
  };

  handleDrop = (file) => {
    this.setState({ imageSrc: file[0] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.createCar(this.state);
    this.resetState();
  };

  resetState() {
    this.setState({
      brand: '',
      model: '',
      year: '',
      maxSpeed: '',
      power: '',
      price: '',
      imageSrc: '',
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="brand-form-title">Create new Car</h2>
        <form className="brand-form" onSubmit={this.handleSubmit}>
          {this.state.imageSrc.preview && (
            <div className="preview">
              <img src={this.state.imageSrc.preview} alt="logo"/>
            </div>
          )}
          <div className="dropzone">
            <Dropzone onDrop={this.handleDrop}>
              <p>Try dropping car image, or click to select image to upload.</p>
            </Dropzone>
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="brand">Car Brand</label>
            <input
              id="brand"
              type="text"
              name="brand"
              value={this.state.brand}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Car Brand"
            />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="model">Car Model</label>
            <input
              id="model"
              type="text"
              name="model"
              value={this.state.model}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Car Model"
            />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="year">Year of Production</label>
            <input
              id="year"
              type="text"
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Year of Production"
            />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="maxSpeed">Max Speed</label>
            <input
              id="maxSpeed"
              type="text"
              name="maxSpeed"
              value={this.state.maxSpeed}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Max Speed"
            />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="power">Car Power</label>
            <input
              id="power"
              type="text"
              name="power"
              value={this.state.power}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Car Power"
            />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="price">Car Price ($)</label>
            <input
              id="price"
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Car Price"
            />
          </div>
          <button type="submit" className="btn btn-outline-info">Save Car</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createCar,
};

export default connect(null, mapDispatchToProps)(CreateCar);

