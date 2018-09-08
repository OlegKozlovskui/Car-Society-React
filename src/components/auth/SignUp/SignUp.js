import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css';

class SignIn extends Component {
  state = {
  };

  render() {
    return (
      <div className="signup">
        <div className="signup-box">
          <h4>Sign Up or <Link to="/">Sign In</Link></h4>
          <div className="form-group">
            <label className="col-form-label" htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" placeholder="First Name" id="firstName" />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name" id="lastName" />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="inputDefault">Email</label>
            <input type="text" className="form-control" placeholder="Email" id="inputDefault" />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="inputDefault">Password</label>
            <input type="text" className="form-control" placeholder="Password" id="inputDefault" />
          </div>
          <button type="button" className="btn btn-secondary signup-btn">
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;