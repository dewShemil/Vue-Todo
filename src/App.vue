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
      isEditingEnabled:false,
    }
  },
  provide(){
    return {
      isEditingEnabled:this.isEditingEnabled
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

label{
  margin: 0 0.5rem;
}

button{
  background-color: #225;
  color: #fff;
  padding: 0.5rem .8rem;
  border-radius: 5px;
  border: none;
  margin: 0  0.5rem;
}

.submit-btn{
  background-color: rgb(108, 8, 8);
}

.clear-btn{
  margin: 2rem 0.5rem;
  background-color: #F73D93;
  color: #293462;

}

.done{
  color: #3EC70B;
}
</style>
