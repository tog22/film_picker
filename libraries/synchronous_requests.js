var getb = {
	
	basic:
	
	function(get_url) {
		
		var server_request = new XMLHttpRequest()
		server_request.open("GET", get_url, false)
		server_request.send()
		
		const response = JSON.parse(server_request.responseText)
		return response
		
	},
	
	react_state:
	
	function(get_url, state, body = 'body') {
		
		let response = getb.basic(get_url)
		
		if (response.result === 'success') {
			state[body] = response[body]
		}
		
	}
}

export default getb 