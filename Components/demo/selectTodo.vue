<template>
    <div class="q-pa-md" style="max-width: %100;">
    <div class="q-gutter-md">
      <q-select filled v-model="store..currentTodo" :options="store..todos" label="focus on just one task" />
    </div>
  </div>
</template>

<script>
import { ref,inject } from 'vue'

export default {
  setup () {
    const store = inject('store')   
    return {
      store,  
    }
  }
}
</script>
<style>

</style>