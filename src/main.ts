import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/style/reset.css'
import '@/style/variable.scss'

createApp(App).use(store).use(router).mount('#app')
