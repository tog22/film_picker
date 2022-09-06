<template>
    <div>
        <h3 class="subheading">
            Your Groups
        </h3>
        <section>
            <q-list bordered separator>
                <q-item
                    v-for="(group, group_index) in groups"
                        clickable
                        v-ripple
                        :to="'/group/'+group.id"
                        :key="'g'+group_index"
                >
                    <span v-html="group.name"></span>
                </q-item>
            </q-list>
        </section>
        <q-btn
            label="Add new group"
            color="primary"
            size="sm"
            href="/#/group/add"
        />
	</div>
</template>

<script>
import dummy_server from '../../Dummy_Server/Data'

let groups = dummy_server.groups



export default {

	name:'Your_Groups',

    data() {
        return {
            groups:     groups
        }
    }

}



let lo = function (to_log) {
  console.log(to_log)
}

</script>

<style>

</style>
