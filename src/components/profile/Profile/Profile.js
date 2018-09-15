import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from '../UserInfo/UserInfo';
import { fetchUserProfile } from '../../../redux/actionts/profileActions';

class Profile extends Component {
	componentDidMount() {
	  this.props.fetchUserProfile();
  }
	
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-4">
	          <UserInfo profile={this.props.profile} />
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
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { fetchUserProfile })(Profile);


