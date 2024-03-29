<template>
    <div class="card mx-auto p-2 form-width">
    <form v-on:submit.prevent="enviar">
        <div class="mb-3">
            <h2>Registrate</h2>
        </div>
        <div>
            <label class="form-label" for="nombre">Nombre:</label>
            <input v-model="usuario.nombre" class="form-control" type="text" name="nombre" id="nombre">
            <div v-if="error.show && error.list.nombre" class="mt-1 alert alert-danger" role="alert">{{ error.list.nombre }}</div>
        </div>
        <div>
            <label class="form-label" for="apellido">Apellido:</label>
            <input v-model="usuario.apellido" class="form-control" type="text" name="apellido" id="apellido">
            <div v-if="error.show && error.list.apellido" class="mt-1 alert alert-danger" role="alert">{{ error.list.apellido }}</div>
        </div>
        <div>
            <label class="form-label" for="correo">Correo:</label>
            <input v-model="usuario.correo" class="form-control" type="email" name="correo" id="correo">
            <div v-if="error.show && error.list.correo" class="mt-1 alert alert-danger" role="alert">{{ error.list.correo }}</div>
        </div>
        <div>
            <label class="form-label" for="contrasena">Contraseña:</label>
            <input v-model="usuario.contrasena" class="form-control" type="password" name="contrasena" id="contrasena">
            <div v-if="error.show && error.list.contrasena" class="mt-1 alert alert-danger" role="alert">{{ error.list.contrasena }}</div>
        </div>
        <div>
            <label class="form-label" for="confirmar_contrasena">Confirmar contraseña:</label>
            <input v-model="usuario.confirmar_contrasena" class="form-control" type="password" name="confirmar_contrasena" id="confirmar_contrasena">
            <div v-if="error.show && error.list.confirmar_contrasena" class="mt-1 alert alert-danger" role="alert">{{ error.list.confirmar_contrasena }}</div>            
        </div>
        <div class="mb-3 mt-2">
            <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/login">Ya tines cuenta, inicia sesion</RouterLink>
        </div>
        <div class="d-flex flex-row justify-content-center">
            <input type="submit" class="btn btn-primary" value="Registrate" name="enviar" id="enviar">
        </div>
    </form>
    <SpinerModal :show="spiner" info="Creando usuario..."/>
    <DialogModal :show="dialog.show" titulo="Registrandose." :text="dialog.text" @cerrar="dialog.show=false"/>
</div>
</template>
<script setup>
    import { UseURLBase } from '@/stores/url_base';
    import {ref} from 'vue'
    import DialogModal from '@/components/DialogModal.vue'
    import SpinerModal from '@/components/SpinerModal.vue'

    const api = UseURLBase()
    const endpoint = '/api/authentication/sigout'
    const url = api.url+endpoint
    const usuario = ref({})
    const error = ref({show: false, list:{}})
    const dialog = ref({show: false, text: ''})
    const spiner = ref(false)

    async function enviar(){
        const formData = new FormData()
        formData.append("nombre",usuario.value.nombre ?? '')
        formData.append("apellido",usuario.value.apellido ?? '')
        formData.append("correo",usuario.value.correo ?? '')
        formData.append("contrasena",usuario.value.contrasena ?? '')
        formData.append("confirmar_contrasena",usuario.value.confirmar_contrasena ?? '')

        spiner.value=true
        const data = await fetch(url,{
            method: "post",
            body:formData
        }).then((response)=>response.json()).catch((error)=>{console.log(error)})

        if(data){
            spiner.value=false
            dialog.value.text=data.message
            dialog.value.show=true
            error.value.show=true
            error.value.list = data.errors[0]
        }
        console.log(data)
       

    }


</script>