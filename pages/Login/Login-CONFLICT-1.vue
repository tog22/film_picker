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
                label="Username"
                v-model="login"
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
			api.login(this.username, this.password, this.on_login, () => {})

		},

        on_login(response) {
            alert(1)
        }
	},
	data() {
		const store = inject("store").state
		// ↓ Reset
		store.sections.add_film = {}
		return {
			login:		        'tomashcanada@gmail.com',
            password:           '123',
            isPwd:              ref(true),
			store: 				store
		}
	}
}


let lo = function (to_log) {
		console.log(to_log)
}

</script>
