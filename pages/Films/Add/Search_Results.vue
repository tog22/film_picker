<template>
    <q-page>
        <h1>
            Select Search Result
        </h1>
    </q-page>
</template>

<script>
import { inject } from "vue"

export default {
    name:       'Search_Results_Page',
    methods: {

    },
    data() {

    	const store = inject("store")

    	return {
			store:					store
    	}
    }
}


let lo = function (to_log) {
  console.log(to_log)
}

</script>
