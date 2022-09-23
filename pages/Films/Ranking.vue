<template>
	<td class="rcell cell">
		<div 
			class="ranking_container"
			:class="is_user"
		>
			<div 
				v-if="is_user"
				class="do_rank"
			>
				<div
					class="option"
					@click="update_ranking(4, fid, uid)"
				>
					<div class="c_symbol">
						<div class="symbol">
							👍
						</div>
					</div>
				</div>
				<div
					class="option"
					@click="update_ranking(3, fid, uid)"
				>
					<div class="c_symbol">
						<div class="symbol">
							👌
						</div>
					</div>
				</div>
				<div
					class="option"
					@click="update_ranking(2, fid, uid)"
				>
					<div class="c_symbol">
						<div class="symbol">
							🤷‍♂️
						</div>
					</div>
				</div>
				<div
					class="option"
					@click="update_ranking(1, fid, uid)"
				>
					<div class="c_symbol">
						<div class="symbol">
							👎
						</div>
					</div>
				</div>
			</div>
			<div 
				v-if="show2"
				class="ranking"
			>
				<div class="c_symbol">
					<div
						class="symbol"
						v-html="ranking_image">
					</div>
				</div>
			</div>
		</div>
	</td>
</template>

<script>
import { inject } from "vue"

export default {
	name: 'Ranking',

	props: [
		'ranking',
		'uid',
		'fid',
		'update_ranking'
	],

	computed: {

		ranking_image: function() {

			let ranking_image = '➕'

			switch(this.ranking) {
				case 4:
				case "4":
					ranking_image = '👍'
					break
				case 3:
				case "3":
					ranking_image = '👌'
					break
				case 2:
				case "2":
					ranking_image = '🤷‍♂️'
					break
				case 1:
				case "1":
					ranking_image = '👎'
					break
				default:
					break
			}

			return ranking_image

		}

	},

	data() {

		const store = inject("store").state

		let is_user = false
		if (this.uid == store.user.uid) is_user = 'is_user'

		let show2 = true
		if (!is_user && !(this.ranking >= 1 && this.ranking <= 4)) show2 = false

		return {
			store: 		store,
			is_user: 	is_user,
			show2: 		show2
		}

	}

}


let lo = function (to_log) {
	console.log(to_log)
}

</script>
