import {defineStore} from 'pinia'

export const UseURLBase=defineStore("url_base",()=>{
    //const url="https://notasrapidasonline-api.erickgonzalez.net"
    const url="http://localhost:8080"
    return {url}
})