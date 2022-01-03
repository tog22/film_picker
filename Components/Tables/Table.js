import React from 'react';

import Film from './Film'

import tog from '../../libraries/tog'

const dv = function dd() {
	return 'aa'
}

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
					{
					tog.objects.map_numeric_obj_to_array(
						this.state.films, 
						(film, fid) => {
							lo(film)
							const key_name = 'gf'+fid
							return (
								<Film film={film} fid={fid} key={key_name} />
							)
						}
					)
					/*this.state.films.map(
						(film, fid) => {
							const key_name = 'gf'+fid
							return (
								<Film film={film} fid={fid} key={key_name} />
							)
						}
					)*/}
				</tbody>
			</table>
		);
	}
	
	constructor(props) {
		
		super(props)
		this.state = {}
		
		// Get films
		
		var films
		var server_request = new XMLHttpRequest()
			
		let group = 1
		let get_url = 'https://filmpicker.philosofiles.com/sync/?action=get_group_films&group='+group
		
		server_request.open("GET", get_url, false)
		server_request.send()
		
		const response = JSON.parse(server_request.responseText)
		
		if (response.result === 'success') {
			this.state.films = response.films
		}
		
		lo(this.state.films)
		
	}
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l