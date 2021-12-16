import React from 'react';

import Film from './Film'

export default class Table extends React.Component {
	
	render() {
		return (
			<table className="group_films big_table">
				<th className="column_titles">
					<td className="cell poster">
					</td>
					<td className="cell details">
					</td>
					<td className="cell">
						June
					</td>
					<td className="cell">
						Tom
					</td>
					<td className="cell">
						Wendy
					</td>
					<td className="cell">
						Zarifa
					</td>
				</th>
				<Film />
			</table>
		);
	}
	
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	
}