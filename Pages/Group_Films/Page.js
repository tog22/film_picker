import React from 'react';

import GroupFilmsTable from './Table'

import { useParams } from "react-router-dom";
import { class_to_make_dummy_server } from '../../Dummy_Server/Data'
import getb from '../../libraries/synchronous_requests'

let dummy_server = new class_to_make_dummy_server
let groups = dummy_server.groups()

export default function GroupFilms() {
	
	let params = useParams();
	let group = groups[params.group_id]
	
	return (
		<div>
			<h2>
				{group.name}
			</h2>
			<GroupFilmsTable />
		</div>
	);
	
}

let l = function (to_log) { 
	console.log(to_log) 
}

let lo = l