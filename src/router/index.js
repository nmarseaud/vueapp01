import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Encounter from '@/components/Encounter'
import NpcGenerator from '@/components/NpcGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/encounter',
      name: 'Encounter',
      component: Encounter
    },
    {
      path: '/npc_gen',
      name: 'NpcGenerator',
      component: NpcGenerator
    }
  ]
})
