<template>
    <div class="card mx-auto p-2 form-width">
        <form @submit.prevent="LogIn">
            <div class="mb-3">
                <h2>Iniciar sesion</h2>
            </div>
            <div class="mb-3">
                <label class="form-label" for="correo_user">Correo:</label>
                <input v-model="email" class="form-control" type="email" name="correo_user" id="correo_user" required>
            </div>
            <div class="mb-3">
                <label class="form-label" for="password">Contraseña:</label>
                <input v-model="password" class="form-control" type="password" name="password" id="password" required>
            </div>
            <div class="mb-3 d-flex flex-column">
                <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/recover_password">Olvidaste tu contraseña click aqui</RouterLink>
                <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/sigout">No tienes una cuenta registrate</RouterLink>
                <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/">Inicio</RouterLink>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <input class="btn nr-btn-primary" type="submit" value="Iniciar sesion">
            </div>
        </form>
        <SpinerModal :show="spiner" info="Iniciando sesion."/>
        <DialogModal :show="modalDialod" @cerrar="modalDialod=false" titulo="Iniciando sesion." :text="texModal" />
    </div>
</template>
<script setup>
import {RouterLink, useRouter} from 'vue-router'
import {Usuario} from '@/stores/usuario'
import { UseURLBase } from '@/stores/url_base'
import { ref } from 'vue'
import SpinerModal from '@/components/SpinerModal.vue'
import DialogModal from '@/components/DialogModal.vue'
import {NuevaPasswordStore} from '@/stores/nuevapassword'

const url_base = UseURLBase()
const usuario = Usuario()
const router = useRouter()

const email = ref('')
const password = ref('')
const texModal = ref('')


const modalDialod = ref(false)
const spiner =ref(false)

const dataUser = new FormData()

const nueva_pass = NuevaPasswordStore()

async function LogIn() {
    spiner.value=true
    dataUser.append('correo', email.value)
    dataUser.append('contrasena', password.value)

    const data = await fetch(url_base.url + "/api/authentication/login", {
        method: 'post',
        body: dataUser
    }).then((response) => response.json()).catch((error)=>{
        //console.log("Error LogIn: ", error)
        spiner.value=false
        texModal.value="Ocurrio un error inesperado."
        modalDialod.value = true
    }).catch((error)=>{
        spiner.value=false
        texModal.value="Ocurrio un error inesperado."
        modalDialod.value = true
        //console.log(error.json())
    })

    if(data){
        spiner.value=false
        texModal.value=data.message
        modalDialod.value = true
        console.log("LogIn Data: ", data)
        if(data.data.status){
            setTimeout(function(){
                modalDialod.value = false
                usuario.status = data.data.status
                usuario.username = data.data.user.nombre
                usuario.lastname = data.data.user.apellido
                usuario.token = data.data.token
                usuario.init()
                limpiar()
                restablecer()
                router.push({path:"/"})
            },2000)            
        }
        if(data.data.nueva_contrasena){
            setTimeout(()=>{
                modalDialod.value = false
                nueva_pass.password = password.value
                router.push({name: 'new_password', params: {email: email.value}})
                limpiar()
                restablecer()
            },2000)
            
        }
    }
}
function limpiar(){
    email.value=null
    password.value=null
    texModal.value=null
}
function restablecer(){
    spiner.value =false
    modalDialod.value = false
}
</script>