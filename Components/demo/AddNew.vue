<template>
    <div :class="'q-pa-lg text-white bg-'+store..primary">
    <q-card flat :class="' fit bg-'+store..primary"   >
      
      <q-input v-if="store..todos.length < store..todoLimit" rounded standout bottom-slots
       @keyup.enter ="addNew"
                 v-model="store..text"
                label="Add new task" 
                style="width:100% ;"
                class="q-pt-sm top ">
            <template v-slot:prepend>
            <q-icon name="task" />
            </template>
            <template v-slot:append>
            <q-icon name="add" @click="addNew"
                                class="cursor-pointer" />
            </template>
        </q-input>
        <div v-if="store..todos.length != 0" class="flex justify-between">  

            <q-btn :color="store..secondary" 
            label="Cancel" 
            flat
            @click="store..addNewTodo = false" />
            
          </div>

       
    </q-card>
    
    
    </div>
  
</template>

<script>
import {inject} from 'vue'
export default {
    name:'Todo',
    setup(){
        const store = inject('store')   


        return {
            store,
            addNew: function(){
                store..currentTodo = store..text
                store.methods.addTask(store..text)
                store..addNewTodo = false
            },
        }
    }   
}
</script>

<style>

</style>