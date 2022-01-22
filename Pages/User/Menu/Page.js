import React from 'react'

import { Link } from "react-router-dom";
import { class_to_make_dummy_server } from '../../../Dummy_Server/Data'
import tog from '../../../Libraries/tog'

let dummy_server = new class_to_make_dummy_server
let groups = dummy_server.groups()

export default class UserMenu extends React.Component {
	
	render() {
		return (
			<>
				{/*
				<h2 className="page_title">
					Your options
				</h2>
				*/}
				<h3 className="subheading">
					Your groups
				</h3>
				<ul class="menu_list">
					{tog.objects.map_numeric_obj_to_array(
						groups, 
						(group, id) => {
							const key_name = 'g_UserMenu_'+id
							return (
								<li key={key_name}>
									<Link to={`/group/${group.id}`}>
										{group.name}
									</Link>
								</li>
							)
						}
					)}
					<li>
						Create a group
					</li>
				</ul>
			</>
		)
	}
	
}