import React from 'react'

import { Link } from "react-router-dom";
import { class_to_make_dummy_server } from '../../../Dummy_Server/Data'

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
					<li>
						Create a group
					</li>
				</ul>
			</>
		)
	}
	
}