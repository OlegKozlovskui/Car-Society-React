import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { signOut } from '../../../redux/actionts/authActions';

const Header = ({ userInfo: { firstName, lastName }, signOut }) => (
	<header>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/profile">CarSociety</Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/profile">My Profile</Link>
					</li>
				</ul>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/profile">{firstName} {lastName}</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/" onClick={signOut} >Log Out</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

const mapStateToProps = state => ({
	userInfo: state.user.userInfo,
});

export default connect(mapStateToProps, { signOut })(withRouter(Header));
