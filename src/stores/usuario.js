import {defineStore,ref,  } from 'pinia'

export const Usuario = defineStore("usuario",()=>{
    const status=ref(false)
    const data=ref({
        name:'',
        apellido:''
    })
    return {status, data}
})