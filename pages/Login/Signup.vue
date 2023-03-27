<template>
    <q-page>

        <h1>
            Sign up
        </h1>

		<q-form
            @submit="on_submit"
            class="full_width_form q-gutter-y-md"
		>
			<q-input
                label="Full name"
                v-model="full_name"
                outlined
                :rules="[val => !!val || 'Required']"
			/>
			<q-input
                label="First name"
                v-model="first_name"
                outlined
                :rules="[val => !!val || 'Required']"
			/>
			<q-input
                label="Email"
                v-model="email"
                outlined
                :rules="[val => !!val || 'Required']"
	    	/>
			<q-input
				label="Password"
				outlined
				v-model="password"
				:type="isPwd ? 'password' : 'text'"
			>
				<template v-slot:append>
					<q-icon
  					:name="isPwd ? 'visibility_off' : 'visibility'"
  					class="cursor-pointer"
  					@click="isPwd = !isPwd"
					/>
				</template>
			</q-input>
			<div style="margin-top: 20px">
				<q-btn
					type="submit"
					label="Sign up"
					color="primary"
					size="md"
				/>
			</div>
		</q-form>
	</q-page>
</template>

<script>
import $ from 'jquery'
import { inject, ref } from "vue"

import api from '../../Server/Server'


export default {
	name: 			'Signup_Page',
	components: {
	},
	methods: {
		on_submit() {

      		let pms = {
				full_name:			this.full_name,
				first_name:			this.first_name,
				password:			this.password,
				// email:				this.email,
			  }

			api.signup(pms, this.on_account_creation, this.on_error)

		},

		on_account_creation(result) {
			lo(result)
			this.store.user = result.user
        	this.$router.push('/home/welcome')
    	},

    	on_error(error) {

    	}
	},
	data() {
		const store = inject("store").state
		// ↓ Reset
		store.sections.add_film = {}
		return {
      full_name:          '',
      first_name:         '',
      email:		          '',
      password:           '',
      isPwd:              ref(true),
			store: 				      store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
