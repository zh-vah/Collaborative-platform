import BoxLeft from '@/components/BoxLeft.vue'
import BoxRight from '@/components/BoxRight.vue'
const loading = {
        install(Vue, options) {
            Vue.component('BoxLeft', BoxLeft)
            Vue.component('BoxRight', BoxRight)
        }
    }
    // 导出
export default loading