import React from 'react'
import { Formik } from 'formik'
//  npm install formik --save

import tog from '../../libraries/tog'

export default class CreateAccount extends React.Component {
	
	render() {
		return (
			<>
				<h1>
					🎞️ Film Picker
				</h1>
				<h2 class="page_title">
					Sign Up
				</h2>
				<form id="create_account" class="form1">
					<div class="s_input_and_label">
						<label for="full_name">
							<div class="s_main">
								Full name
							</div>
							<div class="s_details">
								Or other username - we recommend your full name so friends can recognize you quickly from it, even ones from new movie clubs you join later.
							</div>
						</label>
						<input name="full_name" id="full_name" type="text" />
					</div>
					<div class="s_input_and_label">
						<label for="first_name">
							<div class="s_main">
								First name
							</div>
							<div class="s_details">
								This'll show in a list of short names. If you prefer you can use another name, but it should be as short as a typical first name, and friends should quickly recognize you from from it.
							</div>
						</label>
						<input name="first_name" id="first_name" type="text" />
					</div>
					<div class="s_input_and_label">
						<label for="password">
							<div class="s_main">
								Password
							</div>
						</label>
						<input name="password" type="password" />
					</div>
					<div class="s_submit">
						<input type="submit" value="Sign up" />
					</div>
				</form>
			</>
		);
	}
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l