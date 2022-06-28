import React from 'react'

import YourGroups from '../../../Components/Groups/Your_Groups'

export default class UserMenu extends React.Component {
	
	render() {
		return (
			<>
				<YourGroups />
				<h3>
					Your Films
				</h3>
				<ul>
					<li>
						<a href="/add">
							Add a film
						</a>
					</li>
				</ul>
			</>
		)
	}
	
}