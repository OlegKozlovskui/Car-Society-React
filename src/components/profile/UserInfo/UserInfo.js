import React from 'react';

const UserInfo = ({ userInfo: { firstName, lastName } }) => (
	<div className="card">
		<h3 className="card-header">
			{firstName} {lastName}
			</h3>
		<img src="http://i.infocar.ua/i/6/114309/650x.jpg"
		     alt="Card image" />
		<div className="card-body">
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of
				the card's content.</p>
		</div>
		<ul className="list-group list-group-flush">
			<li className="list-group-item">Cras justo odio</li>
			<li className="list-group-item">Dapibus ac facilisis in</li>
			<li className="list-group-item">Vestibulum at eros</li>
		</ul>
	</div>
);

export default UserInfo;