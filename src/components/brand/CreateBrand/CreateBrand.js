import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';

import './CreateBrand.css';
import { createBrand } from '../../../redux/actionts/brandActions';

class CreateBrand extends Component {
  state = {
    brandName: '',
    brandImg: ''
  };

  handleDrop = (file) => {
    this.setState({ brandImg: file[0] });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createBrand(this.state);
  };

  render() {
    const { brandImg } = this.state;

    return (
      <div className="container">
        <h2 className="brand-form-title">Create new Brand</h2>
        <form className="brand-form" onSubmit={this.handleSubmit}>
          {brandImg.preview && (
            <div className="preview">
              <img src={brandImg.preview} alt="logo"/>
            </div>
          )}
          <div className="dropzone">
            <Dropzone onDrop={this.handleDrop}>
              <p>Try dropping brand logo, or click to select logo to upload.</p>
            </Dropzone>
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="brandName">Brand Name</label>
            <input
              id="brandName"
              type="text"
              name="brandName"
              value={this.state.brandName}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Brand Name"
            />
          </div>
          <button type="submit" className="btn btn-outline-info">Save Brand</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createBrand,
};

export default connect(null, mapDispatchToProps)(CreateBrand);

