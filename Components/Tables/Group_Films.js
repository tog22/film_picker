import React from 'react';

import Table from './Table'

export default class GroupFilms extends React.Component {
	
	render() {
		return (
			<div>
				<h2>
					Psyche Movie Club
				</h2>
				<Table films={this.state.films} group={this.state.group} />
			</div>
		);
	}
	
	constructor(props) {
		super(props)
		this.state = {
			group: [
				'June',
				'Tom',
				'Wendy',
				'Zarifa'
			],
			films: [
				{
					title: 'The Discreet Charm of the Bourgeoisie',
					year: 1972,
					poster: '/media/posters/discreet_charm.jpg',
					type: 'movie',
					summary: 'A surreal, virtually plotless series of dreams centered around six middle-class people and their consistently interrupted attempts to have a meal together.',
					rankings: [
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
			]
		}
	}
	
}



let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l