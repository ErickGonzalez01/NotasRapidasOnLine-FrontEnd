//import {ref, computed} from 'vue'
import { defineStore } from 'pinia'

export const useQuillConf = defineStore("quill",()=>{
    const quillOption = {        
        debug: 'info',
        placeholder: 'Compose an epic...',
        readOnly: true,
        theme: 'snow'
    }
})