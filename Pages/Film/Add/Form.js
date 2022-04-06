import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";




function do_search (values) {
	
	// TO DO: Ajax query the IMDB API I found
	
	/*
	var server_request = new XMLHttpRequest();
	let get_url = 'https://filmpicker.philosofiles.com/sync/?action=signup&full_name='+values.full_name+'&first_name='+values.first_name+'&password='+values.password
	server_request.open("GET", get_url, false) // false = synchronous
	server_request.send()
	const response = JSON.parse(server_request.responseText)	
				
	if (response.result !== 'success') {
		alert('Signup unsuccessful')
		return false
	} else {
		return true
	}
	*/
	
}


const Schema = Yup.object().shape({
	// email: Yup.string().required('This field is required'),
});


// A custom validation function.

const validate_signup = values => {
	
	const errors = {
	}
	
	if (!values.title && !values.imdb_code ) {
		errors.imdb_code = 'You must search for one or the other'
	}
	
	if (values.title && values.imdb_code ) {
		errors.imdb_code = "You can't search for both"
	}
	
	return errors

}


let l = function (to_log) { 
	console.log(to_log) 
}

let lo = l


export const AddFilmForm = () => {
	
	const navigate_hook = useNavigate()
	
	return (
		<div>
			<Formik
				// validationSchema={Schema}
				validate={validate_signup}
				initialValues={{
					title: '',
					imdb_code: ''
				}}
				onSubmit={values => {
					do_search(values)
				}}
				render={({
					errors,
					touched,
					setFieldValue,
					setFieldTouched,
					validateField,
					validateForm,
				}) => (
				<Form
					id="add_film"
					className="form1"
				>
					<div className="s_input_and_label">
						<label htmlFor="title">
							<div className="s_main">
								Search by title…
							</div>
						</label>
						<Field
							name="title"
							type="text"
						/>
						<ErrorMessage name="title" />
					</div>
					<div className="s_input_and_label">
						<label htmlFor="imdb_code">
							<div className="s_main">
								…or by <u>IMDB code</u>
							</div>
						</label>
						<Field
							name="imdb_code"
							type="text"
						/>
						<ErrorMessage name="imdb_code" />
					</div>
					<div className="s_submit">
						<button type="submit">
							Submit
						</button>
					</div>
				</Form>
				)}
			/>
		</div>
	);
	
} 