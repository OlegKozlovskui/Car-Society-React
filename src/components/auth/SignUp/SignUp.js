import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './SignUp.css';
import { createUser } from '../../../redux/actionts/authActions';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
	
	handleSubmit = (e) => {
	  e.preventDefault();
		this.props.createUser(this.state);
	};
  
  render() {
    return (
      <div className="signup">
        <div className="signup-box">
          <h4>Sign Up or <Link to="/">Sign In</Link></h4>
	        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="col-form-label" htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-secondary signup-btn">
              Sign In
            </button>
	        </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { createUser })(SignUp);