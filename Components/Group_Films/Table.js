import React from 'react';

import Film from './Film'

import tog from '../../libraries/tog'
import getb from '../../libraries/synchronous_requests'

export default class GroupFilmsTable extends React.Component {
	
	render() {
		return (
			<table className="group_films big_table">
				<thead>
					<tr className="column_titles">
						<th className="cell poster">
						</th>
						<th className="cell details">
						</th>
						{
							tog.objects.map_numeric_obj_to_array(
								this.state.users, 
								(user, uid) => {
									const key_name = 'u'+uid
									return (
										<th className="cell" key={key_name}>
											{user['name']}
										</th>
									)
								}
							)
						}
					</tr>
				</thead>
				<tbody>
					{
					tog.objects.map_numeric_obj_to_array(
						this.state.films, 
						(film, fid) => {
							// lo(film)
							const key_name = 'gf'+fid
							return (
								<Film film={film} fid={fid} key={key_name} />
							)
						}
					)}
				</tbody>
			</table>
		);
	}
	
	constructor(props) {
		
		super(props)
		this.state = {}
		
		let group = 1
		
		// Get users
		getb.react_state(
			'https://filmpicker.philosofiles.com/sync/?action=get_group_users&group='+group,
			this.state,
			'users'
		)
		
		// Get films
		getb.react_state(
			'https://filmpicker.philosofiles.com/sync/?action=get_group_films&group='+group,
			this.state,
			'films'
		)
	}
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l