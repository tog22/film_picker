import tog from '../Libraries/tog'
import $ from 'jquery'

let server = {
    api: {
        load:
        function(
            vue_data_prop,
            handler,
            vue_component,
            data,
            status,
            request
        ) {
            success(data, status, request) {
                let response = JSON.parse(data)
                if (response.result === 'success') {
                    vue_component[vue_data_prop] = handler();// handler = tog.arrays.map_to_object(response.users, 'uid')
                    tog.vue.mark_loaded(vue_data_prop, vue_component)
                }
            },
            error(request, status, error) {
                alert('⚠️ Error loading '+vue_data_prop)
            }
        },
        get_group_users:
        function(gid, vue_component) {
            
            let load_users_url = 'https://filmpicker.philosofiles.com/sync/?action=get_group_users&group='+gid

            this.api.load(
                'users', 
                () => {tog.arrays.map_to_object(response.users, 'uid')},
                vue_component
            )

            $.ajax({
                url:        load_users_url,
                success:    function(data, status, request) {
                    load.users(data, status, request)
                },
                error:      function(request, status, error){
                    load.users_error(request, status, error)
                }
            })
    
            $.ajax({
                url:        load_films_url,
                success:    function(data, status, request) {
                    load.films(data, status, request)
                },
                error:      function(request, status, error) {
                    load.films_error(request, status, error)
                }
            })
        }
    },


}

// function load() {
//     alert(3)
// }

// func


export default server