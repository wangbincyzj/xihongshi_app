import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 主css入口
import "@/assets/css/main.css"

// iconfont
import "@/assets/js/iconfont"

// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();


// 全局过滤器工具
import filters from "@/utils/filters/index"
Object.keys(filters).forEach((name)=>{
    Vue.filter(name, filters[name])
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')



