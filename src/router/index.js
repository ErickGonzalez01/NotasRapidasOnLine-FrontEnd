import { createRouter, createWebHistory } from 'vue-router'
import { Usuario } from '@/stores/usuario'

import LogInView from '../views/LogInView.vue'
import SigOutView from '../views/SigOutView.vue'
import RecoveryPasswordViewVue from '@/views/RecoveryPasswordView.vue'
import NuevaPasswordViewVue from '@/views/NuevaPasswordView.vue'
import HomeNotasView from '@/views/HomeNotasView.vue'
import VerNotaView from '@/views/VerNotaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home notas',
      component: HomeNotasView,

    },
    {
      path: '/ver_nota',
      name: 'ver notas',
      component: VerNotaView
    },
    {
      path: '/authentication/login',
      name: 'LogIn',
      component: LogInView
    },
    {
      path: '/authentication/sigout',
      name: 'SigOut',
      component: SigOutView
    },
    {
      path: '/authentication/recover_password',
      name: 'recover password',
      component: RecoveryPasswordViewVue
    },
    {
      path: '/authentication/new_password',
      name: 'new password',
      component: NuevaPasswordViewVue
    }
  ]
})

router.beforeEach((to)=>{
  const usuario = Usuario()
  usuario.load()
  if(to.path=="/" && usuario.status==null || usuario.status==false){
    return '/authentication/login'
  }
})

export default router
