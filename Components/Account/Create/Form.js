import React from 'react'
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
//  npm install formik --save




// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate_signup = values => {
	
	const errors = {}
	alert(1)
	if (!values.full_name) {
		errors.full_name = 'Required'
	} else if (values.full_name.length > 40) {
		errors.full_name = 'Must be 40 characters or less'
	}
	
	if (!values.first_name) {
		errors.first_name = 'Required'
	} else if (values.first_name.length > 20) {	
		errors.first_name = 'Must be 20 characters or less'
	}
	
	if (!values.password) {
		errors.password = 'Required';
	} else if (values.first_name.length > 20) {	
		errors.password = 'Must be 20 characters or less';
	}
	
	// if (!values.email) {
	 // 	errors.email = 'Required';
	// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
	 // 	errors.email = 'Invalid email address';
	// }
	
	return errors
	
}

export const Signup = () => {
	
	const formik = useFormik({
		 initialValues: {
		   full_name: '',
		   first_name: '',
		   password: ''
		 },
		 validate_signup,
		 onSubmit: values => {
		   alert(JSON.stringify(values, null, 2));
		 },
	   });
	
	return (
		<form
			id="create_account"
			className="form1"
			onSubmit={formik.handleSubmit}
		>
			<div className="s_input_and_label">
				<label htmlFor="full_name">
					<div className="s_main">
						Full name
					</div>
					<div className="s_details">
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
				{formik.errors.full_name 
					?
					<div className="error">
						{formik.errors.full_name}
					</div>
					:
					null
				}
			</div>
			<div className="s_input_and_label">
				<label htmlFor="first_name">
					<div className="s_main">
						First name
					</div>
					<div className="s_details">
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
				{formik.errors.first_name 
					?
					<div className="error">
						{formik.errors.first_name}
					</div>
					:
					null
				}
			</div>
			<div className="s_input_and_label">
				<label htmlFor="password">
					<div className="s_main">
						Password
					</div>
				</label>
				<input 
					name="password" 
					type="password" 
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				{formik.errors.password 
					?
					<div className="error">
						{formik.errors.password}
					</div>
					:
					null
				}
			</div>
			<div className="s_submit">
				<input type="submit" value="Sign up" />
			</div>
		</form>
	);
	
}


let l = function (to_log) { 
	console.log(to_log) 
}

let lo = l