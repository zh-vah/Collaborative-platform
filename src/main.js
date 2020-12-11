import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import BoxLeft from './components/BoxLeft.vue'
import BoxRight from './components/BoxRight.vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.sass'

import './progress';

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'

Vue.component('v-chart', ECharts)


Vue.use(ElementUI)
Vue.component('BoxLeft', BoxLeft)
Vue.component('BoxRight', BoxRight)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')