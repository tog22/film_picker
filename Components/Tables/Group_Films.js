import React from 'react';

import Table from './Table'

export default class Group_Films extends React.Component {
	
	render() {
		return (
			<div>
				<h2>
					Psyche Movie Club
				</h2>
				<Table />
			</div>
		);
	}
	
	constructor(props) {
		super(props)
		this.state = {
			group_prop: [
				'June',
				'Tom',
				'Wendy',
				'Zarifa'
			]
		}
	}
	
}