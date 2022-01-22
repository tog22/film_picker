import React from 'react';

import GroupFilmsTable from './Table'

import getb from '../../libraries/synchronous_requests'

export default class GroupFilms extends React.Component {
	
	render() {
		return (
			<div>
				<h2>
					Psyche Movie Club
				</h2>
				<GroupFilmsTable />
			</div>
		);
	}
	
}

let l = function (to_log) { 
	console.log(to_log) 
}

let lo = l