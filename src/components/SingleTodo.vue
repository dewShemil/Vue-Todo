<template>
    <div class={{completedStyles}} >
        <h3>{{single}}</h3>
        <button @click="deleteTodo" >Delete</button>
        <button @click="editTodo" >Edit</button>
        <button class="done" @click="toggleStatus" >{{isCompleted}}</button>
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
        deleteTodo(){
            this.$emit("deletetodo",this.single)
        },
        editTodo(){
            this.isEditingEnabled = true
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