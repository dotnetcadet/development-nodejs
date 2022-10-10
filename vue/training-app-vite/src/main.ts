import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import routes from './routes/router'

const app = createApp(App)

app.use(routes)
app.mount('#app')