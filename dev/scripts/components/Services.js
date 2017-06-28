import React from 'react';
import ReactSVG from 'react-svg';
import serviceSVG from './serviceSVG.js';

export default class Services extends React.Component {
	render() {
		return (
			<section className="services">
				{serviceSVG.map((service) => { 
					return (<figure>
						<ReactSVG path={service.svg} />
						<figcaption>
							<h3>{service.heading}</h3>
							<p>{service.caption}</p>
						</figcaption>
					</figure>)
					})
				}
			</section>
		)
	}
}