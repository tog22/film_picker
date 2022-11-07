<template>
    <q-page>

        <h1>
            Login
        </h1>
      
		<q-form
            @submit="on_submit"
            class="full_width_form q-gutter-y-md"
		>
			<q-input
                label="Login"
                v-model="login"
                outlined
                :rules="[val => !!val || 'Enter your login']"
			/>
			<div className="no_top">
				<q-btn
                    type="submit"
                    label="Search"
                    color="primary"
                    size="md"
				/>
			</div>
			<q-banner id="banner" class="hidden text-white bg-red">
					Please enter a title or IMDB ID
			</q-banner>
		</q-form>
	</q-page>
</template>

<script>
import $ from 'jquery'
import { inject } from "vue"

export default {
	name: 			'Login_Page',
	components: {
	},
	methods: {
		on_submit() {

			let query_url = 'http://www.omdbapi.com/?apikey=67a0cf67&s='+this.search_term

			let fn = {

				on_success(data, status, request) {
					let response = data
					console.log(data)
					if (response.Response === 'False') {
						switch (response.Error) {
							case 'Too many results.':
								alert('Too many results. Try searching for a more specific title, or search on IMDB [LINK] and get the IMDB ID (e.g. tt0800369) from the URL')
								break
							default:
								alert('Error: '+response.Error)
								break
    					}
                        return
					}
					this.store.sections.add_film.search_results = response.Search
					this.store.sections.add_film.search_count = response.totalResults
					this.$router.push('/search_results')
				},

				on_error(request, status, error) {
					alert('error 423612')
				},

			}

            fn.on_success = fn.on_success.bind(this)
			$.ajax({
				url:		query_url,
                success:    function(data, status, request) {
                    fn.on_success(data, status, request)
                },
                error:      function(request, status, error){
                    fn.on_error(request, status, error)
                }
			})
		},
	},
	data() {
		const store = inject("store").state
		// ↓ Reset
		store.sections.add_film = {}
		return {
			login:		        '',
            password:           '',
			store: 				store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
