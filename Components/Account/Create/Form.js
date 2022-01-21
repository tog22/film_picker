import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



function submit_signup (values) {
	
}


const Schema = Yup.object().shape({
  email: Yup.string().required('This field is required'),
});


// A custom validation function. This must return an object which keys are symmetrical to our values/initialValues

const validate_signup = values => {
	
	const errors = {
		full_name: null,
		first_name: null,
		password: null
	}
	
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

// Exra validation applied on a field-by-field basis for only required fields
const isRequired = message => value => (!!value ? undefined : message)




// Async Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values =>
  sleep(300).then(() => {
	return {
	};
  });

export const Signup = () => (
  <div>
	<h1>Pick a username</h1>
	<Formik
	  validationSchema={Schema}
	  validate={validate}
	  initialValues={{
		username: '',
		email: '',
		zip: '',
	  }}
	  onSubmit={values => {
		sleep(500).then(() => {
		  alert(JSON.stringify(values, null, 2));
		});
	  }}
	  render={({
		errors,
		touched,
		setFieldValue,
		setFieldTouched,
		validateField,
		validateForm,
	  }) => (
		<Form>
		  <label htmlFor="username">Username</label>
		  <div>
			<Field
			  name="username"
			  validate={isRequired('This field is required')}
			  type="text"
			  placeholder="username"
			/>
			<ErrorMessage name="username" />
		  </div>
		  <br />
		  <div>
			<Field
			  name="email"
			  type="text"
			  placeholder="email"
			/>
			<ErrorMessage name="email" />
		  </div>
		  <br />
		  <div>
			<Field
			  name="zip"
			  type="text"
			  placeholder="zip"
			/>
			<ErrorMessage name="zip" />
		  </div>
		  <br />
		  <button type="submit">Submit</button>
		</Form>
	  )}
	/>
  </div>
);

/*
export const Signup = () => (
  <div>
	<Formik
	  validationSchema={Schema}
	  validate={validate_signup}
	  initialValues={{
		full_name: '',
		first_name: '',
		password: ''
	  }}
	  onSubmit={values => {
		alert(JSON.stringify(values, null, 2));
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
			id="create_account"
			className="form1"
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
				<Field
					name="full_name"
					validate={isRequired('This field is required')}
					type="text"
				/>
				<ErrorMessage name="full_name" />
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
				<Field
					name="first_name"
					validate={isRequired('This field is required')}
					type="text"
				/>
				<ErrorMessage name="first_name" />
			</div>
			<div className="s_input_and_label">
				<label htmlFor="password">
					<div className="s_main">
						Password
					</div>
				</label>
				<Field
					name="password"
					validate={isRequired('This field is required')}
					type="text"
				/>
				<ErrorMessage name="password" />
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
*/

let l = function (to_log) { 
	console.log(to_log) 
}

let lo = l
