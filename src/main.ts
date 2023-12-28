import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import useResize from 'v-resize-lxy'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './styles/tailwind.css'
import './styles/main.css'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(useResize)
app.use(Antd)

app.mount('#app')
