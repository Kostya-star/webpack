import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/app.vue'
import { router } from '@/routing'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router);

app.mount('#root')
