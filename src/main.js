import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './firebase'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(firebase)

app.mount('#app')
