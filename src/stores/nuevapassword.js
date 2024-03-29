import {defineStore} from 'pinia'
import {ref} from 'vue'

export const NuevaPasswordStore = defineStore("nuevaPassword",()=>{
    const password = ref('')    
    return{password}
})