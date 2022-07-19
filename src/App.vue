<template>
  <all-todos></all-todos>
</template>

<script>

import AllTodos from "./components/AllTodos.vue"

export default {
  name: 'App',
  components: {
    AllTodos,
  },
  data() {
    return {
      todos:[],
    }
  },
  provide(){
    return {
      todos:this.todos,
    }
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  max-width: 800px;
  margin: 0 auto;
}
div+div{
  border-top: 2px solid #225;
  margin : 2rem;
}

</style>
