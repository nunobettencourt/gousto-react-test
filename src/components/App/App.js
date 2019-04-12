import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import About from '../About/About';
import HomeContainer from '../../containers/HomeContainer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<header className="navBar">
					<Link to="/">Home</Link>
					<Link to="/about-us">About</Link>
				</header>

				<main>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/about-us" component={About} />
				</main>
			</div>
		);
	}
}

export default App;
