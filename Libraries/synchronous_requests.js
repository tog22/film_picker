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
		
	},
		
	basic_ec: //error correction
	
	function(get_url) {
		var server_request = new XMLHttpRequest()
		server_request.open("GET", get_url, false)
		server_request.send()
		
		let response
		
		try {
			response = JSON.parse(server_request.responseText)
		} catch {
			lo('json unparseable, json was:')
			lo(server_request.responseText)
		}
		
		if ('result' in response) {
			if (response.result === 'success') {
				return response.body
			} else {
				lo('response.result != success')
			}
		} else {
			lo('response.result not reported')
			return false
		}
		
	}
	
}

export default getb 


let l = function (to_log) { 
	console.log(to_log) 
}
let lo = l