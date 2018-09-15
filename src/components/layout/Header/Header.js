import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { logout } from '../../../redux/actionts/authActions';

const Header = ({ profile: { user }, logout }) => (
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
						<Link className="nav-link" to="/profile">{user && user.firstName} {user && user.lastName}</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/" onClick={logout} >Log Out</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

const mapStateToProps = state => ({
	profile: state.profile.profile,
});

export default connect(mapStateToProps, { logout })(withRouter(Header));
