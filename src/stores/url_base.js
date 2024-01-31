import {defineStore} from 'pinia'

export const UseURLBase=defineStore("url_base",()=>{
    const url="http://localhost"
    return {url}
})