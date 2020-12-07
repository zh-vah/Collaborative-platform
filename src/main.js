import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import BoxLeft from '@/components/BoxLeft'
import BoxRight from '@/components/BoxRight.vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.sass'

Vue.use(ElementUI)
Vue.use(BoxLeft)
Vue.component('BoxRight', BoxRight)
    // const loading = {
    //     install(Vue, options) {
    //         Vue.component('BoxLeft', BoxLeft)
    //         Vue.component('BoxRight', BoxRight)
    //     }
    // }
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')