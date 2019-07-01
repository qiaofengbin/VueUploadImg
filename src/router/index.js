import Vue from 'vue'
import Router from 'vue-router'
import Upload from '../upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Upload',
      component: Upload
    },
    {
      path:'/upload',
      name:'Upload',
      component:Upload
    },
  ]
})
