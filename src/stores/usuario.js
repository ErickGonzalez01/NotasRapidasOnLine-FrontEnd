import { defineStore } from 'pinia'
import { ref } from 'vue'

export const Usuario = defineStore("usuario",()=>{
    const status=ref(false)
    const data=ref({
        name:'',
        apellido:''
    })
    return {status, data}
})