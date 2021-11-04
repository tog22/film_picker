import React from 'react';
import '../Styles/Film.css'

export default class Film extends React.Component {
	
	render() {
		return (
			<div className="film">
				<div className="poster">
					<img src={this.state.poster} alt={this.state.type} />
				</div>
				<div className="details">
					<h3>
						{this.state.title}
					</h3>
					{/*
					<div className="metadata">
						{this.state.year} • {this.state.director} • {this.state.genre} • Ratings
					</div>
					*/}
					<div className="summmary">
						{this.state.summary}
					</div>
				</div>
			</div>
		);
	}
	
	constructor(props) {
		super(props)
		this.state = {
			title: 'The Discreet Charm of the Bourgeoisie',
			year: 1972,
			poster: 'https://s3.amazonaws.com/criterion-production/films/ec5399163d6dca9c04ee961a15f1c863/JegycjW6BfTUczUHnh51sLyJCVKQoy_large.jpg',
			type: 'movie',
			summary: 'A surreal, virtually plotless series of dreams centered around six middle-className people and their consistently interrupted attempts to have a meal together.'
		}
	}
	
}