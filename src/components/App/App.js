import React from "react";

import NavBar from './../NavBar/NavBar';
import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="spacer"></div>
				{this.props.children}
			</div>
		);
	}
};
