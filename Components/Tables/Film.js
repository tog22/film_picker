import React from 'react';
import '../../Styles/Film.scoped.css'

export default class Film extends React.Component {
	
	render() {
		return (
			<>
				<tr className="main_row">
					<td className="poster cell" rowspan="2">
						<img src={this.state.poster} alt={this.state.type} />
					</td>
					<td className="details cell">
						<h3>
							{this.state.title}
						</h3>
					</td>
					<td className="ranking cell">
						4
					</td>
					<td className="ranking cell">
						4
					</td>
					<td className="ranking cell">
						4
					</td>
					<td className="ranking cell">
						4
					</td>
				</tr>
				<tr className="summary_row">
					<td className="summary cell" colspan="5">
						{/*
						<div className="metadata">
							{this.state.year} • {this.state.director} • {this.state.genre} • Ratings
						</div>
						*/}
						{this.state.summary}
					</td>
				</tr>
			</>
		);
	}
	
	constructor(props) {
		super(props)
		this.state = {
			title: 'The Discreet Charm of the Bourgeoisie',
			year: 1972,
			poster: '/media/posters/discreet_charm.jpg',
			type: 'movie',
			summary: 'A surreal, virtually plotless series of dreams centered around six middle-class people and their consistently interrupted attempts to have a meal together.',
			group_prop: [
				{
					name: 'June',
					ranking: 4
				},
				{
					name: 'Tom',
					ranking: 3
				},
				{
					name: 'Wendy',
					ranking: 2
				},
				{
					name: 'Zarifa',
					ranking: 1
				},
			]
		}
	}
	
}