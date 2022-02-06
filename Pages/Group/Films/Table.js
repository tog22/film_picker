import React from 'react';
import update from 'immutability-helper';

import bus from '../../../Backing/Bus'

import Film from './Film'

import tog from '../../../Libraries/tog'
import getb from '../../../Libraries/synchronous_requests'

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
								<Film 
									film={film} 
									fid={fid}
									key={key_name}
									change_ranking={this.change_ranking}
								/>
								
							)
						}
					)}
				</tbody>
			</table>
		);
	}
	
	change_ranking (ranking, fid, uid) {
		// this.setState({
		// 	films: update(
		// 		this.state.films, {[fid]: {rankings: {[uid]: {ranking: {$set: ranking}}}}}
		// 	)
		// });
		this.setState({
			films: update(
				this.state.films, {[1]: {rankings: {[1]: {ranking: {$set: ranking}}}}}
			)
		});
		lo(uid)
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
		
		// Bind this in all methods
		this.change_ranking = this.change_ranking.bind(this)
		
	}
	
	componentDidMount() {
		bus.on("changed_ranking", (change) =>
			this.change_ranking(change.ranking, change.film, change.user)
		);
	}
	
	componentWillUnmount() {
		bus.remove("firebase");
	}
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l