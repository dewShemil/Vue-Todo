<template>
    <div>
        <h1>All Todos</h1>
        <form @submit.prevent="addTodo" >
            <div v-if="isInvalid === true" >
                <h4>Invalid Input,Please Try again</h4>
            </div>
            <label >Add Here</label>
            <input type="text" v-model="typedTodo" >
            <button>Add</button>
        </form>
        <single-todo v-for="todo in todos" :key="todo" :single="todo" ></single-todo>
    </div>
</template>

<script>

import SingleTodo from "./SingleTodo.vue"

export default {
    inject:["todos"],
    components:{SingleTodo},
    data() {
        return {
            length: this.todos.length,
            typedTodo:"",
            isInvalid:false
        }
    },
    methods: {
        addTodo(){
            if (this.typedTodo.trim()==="") {
                this.isInvalid = true
                this.typedTodo=""
                setTimeout(() => {
                    this.isInvalid = false
                }, 3000);
            }else{
                this.todos.push(this.typedTodo);
                this.typedTodo=""
            }
        }
    },
}
</script>