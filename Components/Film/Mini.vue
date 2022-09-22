<template>
	<div class="mini_film" :class="click_to_add" @click="on_click">
		<div class="poster">
			<img :src="film.Poster">
		</div>
		<div class="info">
			<div class="title">
				{{film.Title}}
			</div>
			<div class="year">
				{{film.Year}}
			</div>
		</div>
	</div>
</template>

<script>
import {inject} from 'vue'
import $ from 'jquery'

export default {
	name:       'Film_Mini',
	props: [
		'film',
		'imdb_ib',
		'click_to_add'
	],
	methods: {
		on_click() {
			
			if (!this.click_to_add) {
				return
			}

			this.store.state.sections.add_film.selected = this.imdb_ib
			let query_url = 'https://filmpicker.philosofiles.com/sync/?action=add_film&imdb_id='+this.imdb_ib+'&uid='+this.store.state.user.uid;
			lo(query_url)

			let fns = {

				on_success(data, status, request) {
					let response = JSON.parse(data)
					if (response.result === 'success') {
						this.$router.push('/film/new/'+response.body.id)
					} else {
						alert('error 5135')
					}
				},

				on_error(request, status, error) {
					alert('error 7371')
				}
			}

			fns.on_success = fns.on_success.bind(this)

			$.ajax({
				url:  		query_url,
				success:    function(data, status, request) {
					fns.on_success(data, status, request)
				}, 
				error: 		function(request, status, error) {
					fns.on_error(request, status, error)
				}
			})

		}
	},
	data() {
		const store = inject("store")
		return {
			store: 	store
		}
	}
}


let lo = function (to_log) {
	console.log(to_log)
}

</script>
