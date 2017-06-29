import React from 'react';

export default class SchoolDetailsPage extends React.Component {
	constructor() {
		super();
	}
	componentDidMount(){
    	console.log(`mounted ${this.props.match.params.school_url}`)
	}
    render() {
    	let name = this.props.match.params.school_url.split("-").join(" ");
        return (
        	<div>
                <h1 id="schoolName">{name}</h1>
        	</div>
        )
    }
}