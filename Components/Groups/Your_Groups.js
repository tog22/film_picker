import React from 'react'

import { Link } from "react-router-dom";
import { class_to_make_dummy_server } from '../../Dummy_Server/Data'
import tog from '../../Libraries/tog'

let dummy_server = new class_to_make_dummy_server()
let groups = dummy_server.groups()

export default class YourGroups extends React.Component {
	
	render() {
		
		/*
		To add: 
		If no ID, show all groups a user is in 
		*/
		
		return (
			<>
				<h3 className="subheading">
					Your groups
				</h3>
				<ul className="menu_list">
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