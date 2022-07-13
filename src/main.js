import { createApp } from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

const app = createApp(App)

app.use(BootstrapVue)
app.use(IconsPlugin)

app.mount("#app")