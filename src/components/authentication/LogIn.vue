<template>
<div class="card mx-auto p-2 form-width">
    <form @submit.prevent="LogIn">
        <div class="mb-3">
            <h2>Iniciar sesion</h2>
        </div>
        <div class="mb-3">
            <label class="form-label" for="correo_user">Correo:</label>
            <input v-model="email" class="form-control" type="email" name="correo_user" id="correo_user">
        </div>
        <div class="mb-3">
            <label class="form-label" for="password">Contraseña:</label>
            <input v-model="password" class="form-control" type="password" name="password" id="password">
        </div>
        <div class="mb-3 d-flex flex-column">
            <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/recover_password">Olvidaste tu contraseña click aqui</RouterLink>
            <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/sigout">No tienes una cuenta registrate</RouterLink>
        </div>
        <div class="d-flex flex-row justify-content-center">
            <buttom class="btn btn-primary" type="submit">Iniciar secion</buttom>
        </div>
    </form>
</div>
</template>
<script setup>
import {RouterLink} from 'vue-router'
import {Usuario} from '@/stores/usuario'
import {UseURLBase} from '@/stores/url_base'
import {ref} from 'vue'

const url_base = UseURLBase()
const usuario = Usuario()

const email = ref('')
const password = ref('')

const dataUser = new FormData()
dataUser.append('nombre_usuario_o_correo',email)
dataUser.append('contraseña',password)

function LogIn(){
    fetch(url_base+"/inicio",{
        method:'post',
        body:dataUser
    })

}

</script>