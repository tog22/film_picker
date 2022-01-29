import React from 'react';

import GroupFilmsTable from './Table'

import { Link, useParams } from "react-router-dom";
import { class_to_make_dummy_server } from '../../../Dummy_Server/Data'
import getb from '../../../Libraries/synchronous_requests'

let dummy_server = new class_to_make_dummy_server()
let groups = dummy_server.groups()

export default function GroupFilms() {
	
	let params = useParams();
	let group = groups[params.group_id]
	let user = 1
	
	return (
		<div>
			
			<h2>
				{group.name}
			</h2>
			
			<GroupFilmsTable />
			
			<div className="button_row">
				<Link to="/add" className="button">
					Add Film
				</Link>
			</div>
			
		</div>
	);
	
}

let l = function (to_log) { 
	console.log(to_log) 
}

let lo = l