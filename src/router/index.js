import { createRouter, createWebHistory } from 'vue-router'
import { Usuario } from '@/stores/usuario'

import LogInView from '../views/LogInView.vue'
import SigOutView from '../views/SigOutView.vue'
import RecoveryPasswordViewVue from '@/views/RecoveryPasswordView.vue'
import NuevaPasswordViewVue from '@/views/NuevaPasswordView.vue'
import HomeNotasView from '@/views/HomeNotasView.vue'
import VerNotaView from '@/views/VerNotaView.vue'
import NuevaNotaView from '@/views/NuevaNotaView.vue'
import EditarNota from "@/views/EditarNota.vue";

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
      name: 'recover_password',
      component: RecoveryPasswordViewVue
    },
    {
      path: '/authentication/new_password/:email',
      name: 'new_password',
      component: NuevaPasswordViewVue,
      props: true
    },
    {
      path: '/nueva_nota',
      name: 'nueva_nota',
      component: NuevaNotaView
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarNota,
      props: true
    }

  ]
})

router.beforeEach((to)=>{
  const usuario = Usuario()
  usuario.load()
  if(to.path=="/" && usuario.status==null || usuario.status==false){
    return '/authentication/login'
  }
  if(to.path=="/ver_nota" && usuario.status==null || usuario.status==false){
    return '/authentication/login'
  }
  //
  if(to.path=="/nueva_nota" && usuario.status==null || usuario.status==false){
    return '/authentication/login'
  }
  if(to.path=="/editar" && usuario.status==null || usuario.status==false){
    return '/authentication/login'
  }
})

export default router
