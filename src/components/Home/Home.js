import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
	<div>
		<h1 className="title">Welcome to Gousto React Coding Test</h1>
		<p>
			<button onClick={() => props.changePage()}>
				Go to About page via router
			</button>
		</p>
	</div>
);

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			changePage: () => push('/about-us'),
		},
		dispatch
	);

export default connect(
	null,
	mapDispatchToProps
)(Home);
