import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import useResize from 'v-resize-lxy'


const app = createApp(App)
app.use(useResize)
app.use(createPinia())
app.use(router)

app.mount('#app')
