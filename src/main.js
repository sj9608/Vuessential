import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'

createApp(App)
.use(router)
.use(store)
.mount('#app')
