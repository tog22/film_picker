import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  email: Yup.string().required('This field is required'),
});

const validate = values => {
	return {
	  zip: 'This field is required',
	};
}

const isRequired = message => value => (!!value ? undefined : message);

export const Signup = () => (
  <div>
	<Formik
	  validationSchema={Schema}
	  validate={validate}
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


let l = function (to_log) { 
	console.log(to_log) 
}

let lo = l
