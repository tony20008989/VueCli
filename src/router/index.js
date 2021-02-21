import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import counter from '@/components/counter.vue'
import todo from '@/components/todo.vue'
import todo_counter from '@/components/todo_counter.vue'
import vueaxios from 'vue-axios'
import axios from 'axios'

Vue.use(Router,axios,vueaxios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },
    {
      path: '/todo_counter',
      name: 'todo_counter',
      component: todo_counter
    },
  ]
})
