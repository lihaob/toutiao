import Vue from 'vue'
import App from './App'

import $C from './common/config.js'
Vue.prototype.$C=$C

import $H from './common/request.js'
Vue.prototype.$H=$H

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
