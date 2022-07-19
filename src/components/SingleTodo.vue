<template>
    <div>
        <h3>{{single}}</h3>
        <button @click="deleteTodo" >Delete</button>
        <button @click="editTodo" >Edit</button>
    </div>
</template>

<script>
export default {
    props:["single"],
    inject:["todos"],
    data() {
        return {
        }
    },
    methods: {
        deleteTodo(){
            this.$emit("deletetodo",this.single)
        },
        editTodo(){
            console.log("Edit Todo");
        }
    },
}
</script>