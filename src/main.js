import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import axiosHelper from './Helpers/axiosHelper'
import './styles/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import VueCookies from 'vue3-cookies'

import { VueCookieNext } from 'vue-cookie-next'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'
library.add(fas)
const app = createApp(App).use(Oruga)

app.component('fa', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) 

app.use(axiosHelper)
app.use(VueCookieNext)

app.mount('#app')
