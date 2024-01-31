import { ref } from 'vue'
import { defineStore } from 'pinia'

export const sidebarNota = defineStore("sidebarNota",()=>{
    const status = ref(false)
    return {status}
})