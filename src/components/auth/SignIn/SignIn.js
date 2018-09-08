import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SignIn.css';

class SignIn extends Component {
  state = {
    isEmailLogin: false,
  };

  handleEmailLogin = () => {
    this.setState({ isEmailLogin: true });
  };

  render() {
    return (
      <div className="signin">
        <div className="signin-box">
          <h4>Sign In or <Link to="/signup">Sign Up</Link></h4>
          {!this.state.isEmailLogin ? (
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
          <form>
            <div className="form-group">
              <label className="col-form-label" htmlFor="inputDefault">Email</label>
              <input type="text" className="form-control" placeholder="Email" id="inputDefault" />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="inputDefault">Password</label>
              <input type="text" className="form-control" placeholder="Password" id="inputDefault" />
            </div>
            <button type="button" className="btn btn-secondary signin-btn">
              Sign In
            </button>
          </form>
        )}
        </div>
      </div>
    );
  }
}

export default SignIn;