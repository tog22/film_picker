import tog from '../Libraries/tog'
import $ from 'jquery'

let server = {
	
	on_get_success:
	function(
		vue_data_prop,
		handler,
		vue_component,
		data,
		status,
		request
	) {
		let response = JSON.parse(data)
		if (response.result === 'success') {
			vue_component[vue_data_prop] = handler(response)
			tog.vue.mark_loaded(vue_data_prop, vue_component)
		}
	},

	on_get_error:
	function(vue_data_prop, request, status, error) {
		alert('⚠️ API error for '+vue_data_prop)
	},

	on_send_success:
	function(
		callback,
		data,
		status,
		request
	) {
		let response = JSON.parse(data)
		if (response.result === 'success') {
			callback(response)
		}
	},

	on_send_error:
	function(vue_data_prop, request, status, error) {
		alert('⚠️ API error for '+vue_data_prop)
	},

	get:
	function(
		vue_data_prop, 
		url, 
		vue_component, 
		handler
	) {

		let server = this
		
		$.ajax({
			url:        url,
			success:    function(data, status, request) {
				server.on_get_success(
					vue_data_prop, 
					(response) => {return handler(response)},
					vue_component,
					data,
					status,
					request
				)
			},
			error:      function(request, status, error){
				server.on_get_error(vue_data_prop, request, status, error)
			}
		})

	},

	send:
	function(
		url, 
		callback
	) {

		let server = this
		
		$.ajax({
			url:        url,
			success:    function(data, status, request) {
				server.on_send_success(
					callback,
					data,
					status,
					request
				)
			},
			error:      function(request, status, error){
				server.on_send_error(url, request, status, error)
			}
		})

	}
   
}

let api = {

	get_group_users:
	function(gid, vue_component) {
		
		server.get(
			'users',
			'https://filmpicker.philosofiles.com/sync/?action=get_group_users&group='+gid,
			vue_component,
			(response) => {return tog.arrays.map_to_object(response.users, 'uid')}
		);

	},

	get_group_films:
	function(gid, vue_component) {
		
		server.get(
			'films',
			'https://filmpicker.philosofiles.com/sync/?action=get_group_films&group='+gid,
			vue_component,
			(response) => {return response.films}
		);
	
	},

	signup:
	function(username, password, on_account_creation) {
		server.send(
			'https://filmpicker.philosofiles.com/sync/?action=signup&un='+username+'&pw='+password,

		)
	}

}

export default api