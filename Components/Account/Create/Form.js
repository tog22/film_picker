import React from 'react'
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
//  npm install formik --save

export const Signup = () => {
	
	const formik = useFormik({
		 initialValues: {
		   full_name: '',
		   first_name: '',
		   password: ''
		 },
		 onSubmit: values => {
		   alert(JSON.stringify(values, null, 2));
		 },
	   });
	
	return (
		<form
			id="create_account"
			class="form1"
			onSubmit={formik.handleSubmit}
		>
			<div class="s_input_and_label">
				<label htmlfor="full_name">
					<div class="s_main">
						Full name
					</div>
					<div class="s_details">
						Or other username - we recommend your full name so friends can recognize you quickly from it, even ones from new movie clubs you join later.
					</div>
				</label>
				<input 
					name="full_name" 
					id="full_name" 
					type="text" 
					onChange={formik.handleChange}
					value={formik.values.full_name}
				/>
			</div>
			<div class="s_input_and_label">
				<label htmlfor="first_name">
					<div class="s_main">
						First name
					</div>
					<div class="s_details">
						This'll show in a list of short names. If you prefer you can use another name, but it should be as short as a typical first name, and friends should quickly recognize you from from it.
					</div>
				</label>
				<input 
					name="first_name" 
					id="first_name" 
					type="text" 
					onChange={formik.handleChange}
					value={formik.values.first_name}
				/>
			</div>
			<div class="s_input_and_label">
				<label htmlfor="password">
					<div class="s_main">
						Password
					</div>
				</label>
				<input 
					name="password" 
					type="password" 
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
			</div>
			<div class="s_submit">
				<input type="submit" value="Sign up" />
			</div>
		</form>
	);
	
}

let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l