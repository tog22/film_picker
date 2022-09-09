<template>
	<q-page>
		<h1>
				Find Film
		</h1>
		<q-form
				@submit="on_submit"
				class="full_width_form q-gutter-y-md"
		>
			<q-input
					label="Enter search here"
					v-model="search_term"
					outlined
			/>
			<div>
					<q-radio
							label="Title"
							v-model="search_type"
							val="title"
					/>
					<q-radio
							label="IMDB ID"
							v-model="search_type"
							val="imdb_id"
					/>
			</div>
			<div className="button_row tight_top">
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
	name: 			'Add_Film_Page',
	components: {
	},
	methods: {
		on_submit() {

			let search_type = ((this.search_type === 'title') ? 's=' : 'i=')
			let query_url = 'http://www.omdbapi.com/?apikey=67a0cf67&'+search_type+this.search_term
			lo(query_url)

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
					this.store.state.sections.add_film.search_results = response.Search
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
		const store = inject("store")
		return {
			search_type:		'title',
			search_term:		'',
			store:					store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
