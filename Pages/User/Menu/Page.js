import React from 'react'

import { Link } from "react-router-dom";

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
						<Link to='/group'>
							Psyche Movie Club
						</Link>
					</li>
					<li>
						Create a group
					</li>
				</ul>
			</>
		)
	}
	
}