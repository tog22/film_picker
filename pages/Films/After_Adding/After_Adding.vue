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
		<section class="no_header">
			<div class="buttons_vertical_centered lgt">
				<div class="s_button">
					<q-btn
						label="Add Another Film"
						color="primary"
						size="lg"
						to="/add"
					/>
				</div>
				<div class="s_button">
					<q-btn
						v-if="store.current.group"
						label="See Your Group"
						color="primary"
						size="lg"
						:to="'\/group/'+store.current.group"
						
					/>
					<!-- :to="'\/group'+store.current.group" -->
					<q-btn
						v-else
						label="See Your Groups"
						color="primary"
						size="lg"
						to="/groups"
					/>
				</div>
			</div>
		</section>
	</q-page>
</template>

<script>
import $ from 'jquery'
import { inject } from "vue"

let saved = `

				
`

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
		let store_parent = inject("store")

		return {
			store: 			store_parent.state

		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
