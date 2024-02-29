import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Quill 
//https://vueup.github.io/vue-quill/guide/usage.html
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/main.css'

import bootstrap from 'bootstrap/dist/js/bootstrap'

const app = createApp(App)
app.component('QuillEditor', QuillEditor)

app.use(bootstrap)
app.use(createPinia())
app.use(router)
app.mount('#app')
