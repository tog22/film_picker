import React from 'react'

import { Signup } from './Form'

export default class CreateAccount extends React.Component {
	
	render() {
		return (
			<>
				<h2 className="page_title">
					Sign Up
				</h2>
				<Signup />
			</>
		)
	}
	
}