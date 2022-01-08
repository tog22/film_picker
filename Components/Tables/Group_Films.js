import React from 'react';

import Group_Films_Table from './Group_Films_Table'

export default class GroupFilms extends React.Component {
	
	render() {
		return (
			<div>
				<h2>
					Psyche Movie Club
				</h2>
				<Group_Films_Table group={this.state.group} />
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
			/*
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
							uid: 2,
							ranking: 4
						},
						{
							name: 'Tom',
							uid: 1,
							ranking: 3
						},
						{
							name: 'Wendy',
							uid: 3,
							ranking: 2
						},
						{
							name: 'Zarifa',
							uid: 4,
							ranking: 1
						},
					]
				}
			]
			*/
		}
	}
	
}



let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l