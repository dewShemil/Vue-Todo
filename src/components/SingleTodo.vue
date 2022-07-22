<template>
    <div>
        <h3 :class=" status ? 'done':''" >{{single}}</h3>
        <button @click="$store.commit('deleteTodo' , {todo : this.todo})" >Delete</button>
        <button @click="editTodo" >Edit</button>
        <button  @click="toggleStatus" >{{isCompleted}}</button>
    </div>
</template>

<script>
export default {
    props:["single"],
    inject:["todos","isEditingEnabled"],
    data() {
        return {
            status :false,
        }
    },
    methods: {
        editTodo(){
            this.isEditingEnabled = true
            console.log("Edit Clicked : " + this.isEditingEnabled);
        },
        toggleStatus(){
            this.status = !this.status
        }
    },
    computed: {
        isCompleted(){
            return this.status ? "Mark Not Done" : "Mark Completed"
        },
    },
}
</script>

<style>
    
</style>