// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import './assets/style/element-variables.scss'
import './assets/style/reset.css'
import './assets/style/animate.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './assets/font/iconfont.css'

Vue.use(mavonEditor)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
