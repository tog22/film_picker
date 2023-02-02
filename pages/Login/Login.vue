<template>
    <q-page>

        <h1>
            Log in
        </h1>
      
		<q-form
            @submit="on_submit"
            class="full_width_form q-gutter-y-md"
		>
			<q-input
                label="Email"
                v-model="login"
                outlined
                :rules="[val => !!val || 'Enter your login']"
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
			<div>
				<q-btn
                    type="submit"
                    label="Log in"
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
	name: 			'Login_Page',
	components: {
	},
	methods: {
		on_submit() {
			api.login(this.login, this.password, this.on_login, () => {})

		},
	},
	data() {
		const store = inject("store").state
		// ↓ Reset
		store.sections.add_film = {}
		return {
			login:		        '',
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
