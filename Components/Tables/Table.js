import React from 'react';

import Film from './Film'

export default class Table extends React.Component {
	
	render() {
		return (
			<table className="group_films big_table">
				<thead>
					<tr className="column_titles">
						<th className="cell poster">
						</th>
						<th className="cell details">
						</th>
						<th className="cell">
							June
						</th>
						<th className="cell">
							Tom
						</th>
						<th className="cell">
							Wendy
						</th>
						<th className="cell">
							Zarifa
						</th>
					</tr>
				</thead>
				<tbody>
					{this.props.films.map(
						(film, index) => {
							const key_name = 'gf'+index
							return (
								<Film film={film} index={index} key={key_name} />
							)
						}
					)}
				</tbody>
			</table>
		);
	}
	
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l