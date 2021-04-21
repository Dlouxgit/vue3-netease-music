import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { ElLoading } from 'element-plus'

import '@/style/index.scss'

createApp(App).use(store).use(router).use(ElLoading).mount('#app')
