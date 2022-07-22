<template>
    <div>
        <h1>All Todos</h1>
        <form @submit.prevent="addTodo" >
            <div v-if="isInvalid === true" >
                <h4>Invalid Input,Please Try again</h4>
            </div>
            <label >{{isEditing}}</label>
            <input type="text" v-model="typedTodo" >
            <button class="submit-btn" >{{isEditing}}</button>
        </form>
        <single-todo
         v-for="todo in $store.state.todos"
         :key="todo"
         :single="todo"
         @deletetodo="deleteSingleTodo"
         >
        </single-todo>
    </div>
</template>

<script>

import SingleTodo from "./SingleTodo.vue"

export default {
    inject:["todos","isEditingEnabled"],
    components:{SingleTodo},
    data() {
        return {
            length: this.$store.state.todos.length,
            typedTodo:"",
            isInvalid:false,
        }
    },
    methods: {
        addTodo(){
            if (this.typedTodo.trim()==="" || (this.$store.state.todos.indexOf(this.typedTodo) !== -1) ) {
                this.isInvalid = true
                this.typedTodo=""
                setTimeout(() => {
                    this.isInvalid = false
                }, 3000);
            }else{
                this.$store.commit("addTodo",{todo : this.typedTodo})
                this.typedTodo = ''
            }
        },
    },
    computed: {
        isEditing(){
            return this.isEditingEnabled ? "Save" : "Add"
        }
    },
}
</script>