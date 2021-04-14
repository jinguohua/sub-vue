import Vue from 'vue'
import VueRouter  from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vue1 from '@/views/view1'
import Vue2 from '@/views/view2'
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue1',
      name: 'Vue1',
      component: Vue1
    },
    {
      path: '/vue2',
      name: 'Vue2',
      component: Vue2
    },
  ]
})
