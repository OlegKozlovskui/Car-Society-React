import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from '../UserInfo/UserInfo';

class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-4">
	          <UserInfo userInfo={this.props.userInfo} />
          </div>
          <div className="col col-8">
            News
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	userInfo: state.user.userInfo,
});

export default connect(mapStateToProps)(Profile);


