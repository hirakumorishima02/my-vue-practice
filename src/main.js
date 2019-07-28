// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store.js'
//routerの読み込み
import router from './router.js'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, //store.jsを注入
  router, //router.jsを登録
  render: h => h(App)
})
