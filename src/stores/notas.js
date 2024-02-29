import {defineStore} from 'pinia'
import { ref } from 'vue'
import {useRouter} from 'vue-router'

import { Usuario } from './usuario'
import { UseURLBase } from './url_base'

export const Notas = defineStore("notas",()=>{

    const router = useRouter()
    const usuario = Usuario()
    const url = UseURLBase()
    const pager = ref(0)
    const pager_curren = ref(1)
    const notas = ref([]);
    const isDisponible = ref(false)
    const notaactual = ref(0)
    const vernotapagequill = ref(true)

    async function notasApi(pagina = 1){

        isDisponible.value=true
        const url2 = url.url+"/api/user/notes?page="+pagina
        const data = await fetch(url2,{headers:{Authorization: "Bearer "+usuario.token,}}).then((response)=>response.json()).catch((error)=>error.json())
        
        if(data.data.status == false){

            isDisponible.value=false
            usuario.remove()
            router.push({path: '/authentication/login'})

        }else{

            pager.value =data.data[0].pagerOptions.numeroDePaginas
            notas.value = data.data[0].notas
            pager_curren.value = pagina
            isDisponible.value = false
            
        }        
    }

    function reset(){
        pager.value = 0
        notas.value=[]
    }
    
    return {pager, pager_curren, notas, isDisponible, notaactual, vernotapagequill, notasApi, reset}
})