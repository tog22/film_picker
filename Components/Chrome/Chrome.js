import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default class Chrome extends React.Component {
		
	render() {
		return (
			<>
				<h1 id="site_title">
					<Link to='/'>
						🎞️ Film Picker
					</Link>
				</h1>
				<Link to='/group'>
					Group
				</Link>
				<span> | </span>
				<Link to='/signup'>
					Signup
				</Link>
				<Outlet />
			</>
		)
	}
	
}