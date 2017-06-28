import React from 'react';
import {ajax} from 'jquery';
import Map from './Map';



export default class FeaturedSchools extends React.Component {
	constructor() {
		super();
		this.state = {
			schools: [] 
		}
	}
	componentDidMount() {
			ajax({
				url: 'http://www.scholarhood.ca/dev-test.json',
				method: 'GET',
				dataType: 'json'
			})
			.then((res) => {
				// console.log(res);
				let schools = res.map((school) => {
					return {
						name: school.name,
						level: school.level[0],
						type: school.type,
						language: school.language,
						lat: school.latitude,
						long: school.longitude
					}
				});
				console.log(schools);
				this.setState({
					schools: schools,
				})
			});
		}
		render() {
			return (
				<section id="featuredSchools">
				<h2>Featured Schools</h2>
				<Map location={this.state.schools[0]}/>	
				<Card schools={this.state.schools}/>	
				</section>
			)
		}
}
const Card = (props) => { 
	return (
		<div className="cardGallery">
			{props.schools.map((school, i) => {
				return (
					<figure key={`${i}`} className="schoolCard">
					<Map location={school}/>	
					<h2>{school.name}</h2>
					<h3>{school.level}</h3>
					<figcaption>
						<p>{school.type}</p>
						<p>{school.language}</p>
					</figcaption>
				</figure>
				)	
			})}
		</div>
	)
}