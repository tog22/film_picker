<template>
    <q-page>

      <h2 v-html="group.name">
      </h2>

        <Group_Films_Table />

        <div class="button_row">
          <q-btn
              label="Add Film"
              color="primary"
              size="md"
              @click="add_film()"
          />
        </div>

    </q-page>
</template>

<script>
import {inject} from 'vue'
import Group_Films_Table from '../../pages/Films/Table'
/*
*/


import dummy_server from '../../Dummy_Server/Data'

let groups = dummy_server.groups

export default {
    name:           'Group_Films_Page',
    components:     {
        Group_Films_Table
    },
    methods: {
      add_film() {
        this.store.sections.add_film.previous_page = '/group/'+this.group.id
        this.$router.push('/add')
      }
    },
    data() {
      
      let group = groups[this.$route.params.id]
      let store_parent = inject("store")

      return {
        store: 			store_parent.state,
        group:      group
      }
    }
}


let lo = function (to_log) {
  console.log(to_log)
}

</script>
