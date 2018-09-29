import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import './SignIn.css';
import config from '../../../config/config';
import { signIn, googleLogin, facebookLogin } from '../../../redux/actionts/authActions';

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
	
	googleResponse = (e) => {
		const payload = {
			access_token: e.accessToken
		};
		
		this.props.googleLogin(payload);
	};
	
	facebookResponse = (e) => {
		const payload = {
			access_token: e.accessToken
		};
		
		this.props.facebookLogin(payload);
	};
	
	handleSubmit = (e) => {
	  const { email, password } = this.state;
		e.preventDefault();
		
		this.props.signIn({
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
	          <FacebookLogin
		          appId={config.FACEBOOK_APP_ID}
		          callback={this.facebookResponse}
		          render={renderProps  => (
			          <button type="button" className="btn facebook-btn" onClick={renderProps.onClick}>
				          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
				          Facebook
			          </button>
		          )}
	          />
	          <GoogleLogin
		          clientId={config.GOOGLE_CLIENT_ID}
		          buttonText="Login"
		          className="btn google-btn"
		          onSuccess={this.googleResponse}
		          onFailure={this.googleResponse}
	          >
		          <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
		          Google
	          </GoogleLogin>
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

const mapDispatchToProps = {
	signIn,
	googleLogin,
	facebookLogin
};

export default connect(null, mapDispatchToProps)(SignIn);
