import { createApp } from 'vue'
import main from './main.vue'
import router from './router'


const app = createApp(main)

app.use()
app.use(router)
app.mount('#app')