

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/main.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'


const app = createApp(App)

app.use(bootstrap)
app.use(createPinia())
app.use(router)

app.mount('#app')
