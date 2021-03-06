/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
// import { BootstrapVue } from 'bootstrap-vue'

const app = createApp(App)
const store = createStore({
    state(){
        return {
            todos :[],
        }
    },
    mutations :{
        addTodo(state,payload){
            state.todos.push(payload.todo)
        },
        clear(state){
            state.todos = []
        }
    },
    getters: {
        isclear(state) {
            return (state.todos.length >= 2)
        }
    }
})

app.use(store)

app.mount("#app")