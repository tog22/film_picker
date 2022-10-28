import tog from '../Libraries/tog'
import $ from 'jquery'

let on = {
	success:
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
			vue_component[vue_data_prop] = handler();// handler = tog.arrays.map_to_object(response.users, 'uid')
			tog.vue.mark_loaded(vue_data_prop, vue_component)
		}
	},

	error:
	function(error_for, request, status, error) {
		alert('⚠️ API error for '+error_for)
	}
    
}

let api = {

	get_group_users:
	function(gid, vue_component) {
		
		let load_users_url = 'https://filmpicker.philosofiles.com/sync/?action=get_group_users&group='+gid

		$.ajax({
			url:        load_users_url,
			success:    function(data, status, request) {
				on_response.success(
					'users', 
					() => {tog.arrays.map_to_object(response.users, 'uid')},
					vue_component,
					data,
					status,
					request
				)
			},
			error:      function(request, status, error){
				on_response.error('users', request, status, error)
			}
		})

	}

}

// function load() {
//     alert(3)
// }

// func


export default api