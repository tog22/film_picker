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
                label="Login"
                v-model="username"
                outlined
                :rules="[val => !!val || 'Enter your login']"
			/>
            <q-input 
                label="Password"
                outlined
                v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password"
            >
                <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>
			<div className="no_top">
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
import { inject } from "vue"

import api from '../../Server/Server'


export default {
	name: 			'Login_Page',
	components: {
	},
	methods: {
		on_submit() {

			

			api.signup(this.username, this.password, this.on_account_creation)

		},

        on_account_creation(user) {
            this.store.user = user
            this.$router.push('/home/welcome)
        }
	},
	data() {
		const store = inject("store").state
		// ↓ Reset
		store.sections.add_film = {}
		return {
			username:		    '',
            first_name:         '',
            full_name:          '',
            password:           '',
            isPwd:              ref(true),
			store: 				store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
