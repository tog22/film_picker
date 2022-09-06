<template>
    <q-page>

        <h2 v-html="group.name">
        </h2>

        <Group_Films_Table />

        <div className="button_row center">
          <q-btn
              label="Add Film"
              color="primary"
              size="md"
              href="/#/add"
          />
        </div>

    </q-page>
</template>

<script>
import Group_Films_Table from '../../pages/Films/Table'

export default {
    name:           'Group_Films_Page',
    components:     {
        Group_Films_Table
    }
}

</script>
