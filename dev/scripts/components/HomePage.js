import React from 'react';
import Intro from './Intro';
import Services from './Services';
import FeaturedSchools from './FeaturedSchools';

export default class HomePage extends React.Component {
	render() {
		return (
			<div>
				<Intro />
				<Services />
				<FeaturedSchools/>
			</div>
		)
	}
}