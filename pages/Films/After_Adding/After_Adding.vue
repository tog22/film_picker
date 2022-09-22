<template>
	<q-page>
		<section>
			<h2>
				How do you feel about watching this?
			</h2>
			<div id="response_list_with_keys">
				<div class="response" @click="set_ranking(4)">
					<div class="icon">
						👍
					</div>
					<div class="key">
						I'm keen to
					</div>
				</div>
				<div class="response" @click="set_ranking(3)">
					<div class="icon">
						👌
					</div>
					<div class="key">
						I'm good to
					</div>
				</div>
				<div class="response" @click="set_ranking(2)">
					<div class="icon">
						🤷‍♂️
					</div>
					<div class="key">
						I might
					</div>
				</div>
				<div class="response" @click="set_ranking(1)">
					<div class="icon">
						👎
					</div>
					<div class="key">
						I wouldn't
					</div>
				</div>
			</div>
		</section>
	</q-page>
</template>

<script>
import $ from 'jquery'
import { inject } from "vue"

export default {
	name: 			'After_Adding_Page',
	components: {
	},
	methods: {
		
		set_ranking(ranking) {

			let query_url = 'https://filmpicker.philosofiles.com/sync/?action=update_ranking&film='+this.$route.params.id+'&user='+this.store.user.uid+'&ranking='+ranking

			let sync = {

				on_success(data, status, request) {
					let response = JSON.parse(data)
					if (response.result !== 'success') {
						alert('err 4543')
					}
					
				},

				on_error(request, status, error) {
					alert('error 4212')
				},

			}

            sync.on_success = sync.on_success.bind(this)

			$.ajax({
				url:		query_url,
                success:    function(data, status, request) {
                    sync.on_success(data, status, request)
                },
                error:      function(request, status, error){
                    sync.on_error(request, status, error)
                }
			})
		},

	},
	data() {
		let store = inject("store")

		// Load film data

		let film
		let fid = store.sections.add_film.selected
		let load_film_url = 'https://filmpicker.philosofiles.com/sync/?action=get_film&fid='+fid

		let load = {

			film(data, status, request) {
				let response = JSON.parse(data)
				if (response.result === 'success') {
					this.film = response.body
					console.log(this.film)
				}
			},

			film_error(request, status, error) {
				alert('load film error')
			},

		}

		load.film = load.film.bind(this)

		$.ajax({
			url:        load_film_url,
			success:    function(data, status, request) {
				fns.on_success(data, status, request)
			},
			error:      function(request, status, error){
				fns.on_error(request, status, error)
			}
		})

		return {
			film: 				null,
			store:				store

		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
