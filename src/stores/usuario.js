import { defineStore } from 'pinia'
import { ref } from 'vue'

export const Usuario = defineStore("usuario",()=>{
    const status = ref(false)
    const username = ref("")
    const lastname = ref("")
    const token = ref("")

    function init(){
        window.localStorage.setItem("status",status.value)
        window.localStorage.setItem("username",username.value)
        window.localStorage.setItem("lastname",lastname.value)
        window.localStorage.setItem("token",token.value)
    }
    function load(){
        status.value = window.localStorage.getItem("status");
        username.value = window.localStorage.getItem("username");
        lastname.value = window.localStorage.getItem("lastname");
        token.value = window.localStorage.getItem("token");
    }
    function remove(){
        window.localStorage.removeItem("status");
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("lastname");
        window.localStorage.removeItem("token");
    }
    return {status, username, lastname, token, init, load, remove}
})