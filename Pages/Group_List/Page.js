import React from 'react'

import { Outlet } from "react-router-dom";

export default class GroupList extends React.Component {
	
	render() {
		
		/*
		To add: 
		If no ID, show all groups a user is in 
		*/
		
		return (
			<Outlet />
		)
	}
	
}