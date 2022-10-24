<template>
    <q-page>

      <h2 v-html="group.name">
      </h2>

        <Group_Films_Table />

        <div class="button_row">
          <q-btn
              label="Add Film"
              color="primary"
              size="md"
              to="/add"
          />
        </div>

    </q-page>
</template>

<script>
import Group_Films_Table from '../../pages/Films/Table'
/*
*/


import dummy_server from '../../Dummy_Server/Data'

let groups = dummy_server.groups

export default {
    name:           'Group_Films_Page',
    components:     {
        Group_Films_Table
    },
    data() {
      
			let query_url = 'https://filmpicker.philosofiles.com/sync/?action=get_
			lo(query_url)

			// API functions
			let api = {

				on_success(data, status, request) {
					let response = JSON.parse(data)
					if (response.result === 'success') {
						this.$router.push('/group/'+response.body.gid)
					} else {
						alert('error 51335')
					}
				},

				on_error(request, status, error) {
					alert('error 73371')
				}
			}

			api.on_success = api.on_success.bind(this)
			$.ajax({
				url:		query_url,
                success:    function(data, status, request) {
                    api.on_success(data, status, request)
                },
                error:      function(request, status, error){
                    api.on_error(request, status, error)
                }
			})
      
      let group = groups[this.$route.params.id]
      return {
        group: group
      }
    }
}


let lo = function (to_log) {
  console.log(to_log)
}

</script>
