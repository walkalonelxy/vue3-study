/*
 * @Author: 梁小鱼
 * @Date: 2023-12-27 11:35:31
 * @LastEditors: lxy
 * @LastEditTime: 2024-02-02 15:35:11
 * @FilePath: \vue3-study\src\main.ts
 * @Description: 
 * Copyright (c) 2024 by lxy, All Rights Reserved.
 */
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
