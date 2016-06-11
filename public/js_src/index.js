import React from 'react';
import ReactDom from 'react-dom';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

class Content extends React.Component {
	render () {
		return (
			<div>
				<header className="site-header jumbotron">
					<DropdownButton title="Dropdown" id="bg-nested-dropdown">
						<MenuItem eventKey="1">Dropdown link</MenuItem>
						<MenuItem eventKey="2">Dropdown link</MenuItem>
					</DropdownButton>
				</header>
			</div>
		);
	}
};

ReactDom.render(
	<Content />,
	document.getElementById('react_content')
);