import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SignIn.css';
import { loginUser } from '../../../redux/actionts/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    isEmailLogin: false,
  };
	
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

  handleEmailLogin = () => {
    this.setState({ isEmailLogin: true });
  };
	
	handleSubmit = (e) => {
	  const { email, password } = this.state;
		e.preventDefault();
		this.props.loginUser({
			email,
			password
    });
	};

  render() {
    const { isEmailLogin } = this.state;
    return (
      <div className="signin">
        <div className="signin-box">
          <h4>Sign In or <Link to="/signup">Sign Up</Link></h4>
          {!isEmailLogin ? (
          <Fragment>
            <button type="button" className="btn facebook-btn">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              Facebook
            </button>
            <button type="button" className="btn google-btn">
              <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
              Google
            </button>
            <button type="button" className="btn btn-secondary" onClick={this.handleEmailLogin}>
              <FontAwesomeIcon icon='envelope' />
              Email
            </button>
          </Fragment>
          ) : (
          <form onSubmit={this.handleSubmit}>
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
            <button type="submit" className="btn btn-secondary signin-btn">
              Sign In
            </button>
          </form>
        )}
        </div>
      </div>
    );
  }
}

export default connect(null, { loginUser })(SignIn);
