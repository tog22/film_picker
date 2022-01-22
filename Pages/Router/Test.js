// export default function RouterTest() {
// 	  return (
// 		<main style={{ padding: "1rem 0" }}>
// 		  <h2>RouterTest</h2>
// 		</main>
// 	  );
// 	}

import React from 'react'

import { Signup } from '../Account/Create/Form'

export default class RouterTest extends React.Component {
	
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