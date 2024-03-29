<template>
    <div class="card mx-auto p-2 form-width">
        <form v-on:submit.prevent="post">
            <div>
                <h3>Cambiar contraseña</h3>
                <h5 class="text-primary">{{ email }}</h5>
            </div>
            <div>
                <label class="form-label" for="nueva_contrasena">Nueva contraseña:</label>
                <input v-model="usuario.nueva_contrasena" class="form-control" type="password" id="nueva_contrasena" name="nueva_contrasena">
            </div>
            <div>
                <label class="form-label" for="confirmar_contrasena">Confirmar contraseña:</label>
                <input v-model="usuario.confirmar_contrasena" class="form-control" type="password" id="confirmar_contrasena" name="confirmar_contrasena">
            </div>
            <div>
                <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/login">Iniciar sesion</RouterLink>
            </div>
            <div class="mt-2 d-flex flex-row justify-content-center">
                <button class="btn btn-primary">Aceptar</button>
            </div>
        </form>
        <SpinerModal :show="spiner.show" :info="spiner.info"/>
        <DialogModal :show="dialog_modal.show" :titulo="dialog_modal.titulo" :text="dialog_modal.text" @cerrar="dialog_modal.show=false"/>
    </div>
</template>
<script setup>
    import {defineProps, ref} from 'vue'
    import { UseURLBase } from '@/stores/url_base';
    import SpinerModal from '@/components/SpinerModal.vue'
    import DialogModal from '@/components/DialogModal.vue'
    import { useRouter } from 'vue-router';
    import { NuevaPasswordStore } from '@/stores/nuevapassword';

    const password_stores = NuevaPasswordStore()
    const props = defineProps({email: {type: String}})
    const usuario = ref({email: props.email, rcp_contrasena: password_stores.password})
    const api = UseURLBase()
    const endpoint = "/api/authentication/newpassword"
    const url = api.url+endpoint
    const spiner = ref({show: false, info: 'Espre...'})
    const dialog_modal = ref({show: false, titulo: 'Cambiando contraseña.', text: ''})
    const router = useRouter()

    async function post(){
        const formData = new FormData()
        formData.append("correo",usuario.value.email)
        formData.append("rcp_contrasena",usuario.value.rcp_contrasena)
        formData.append("nueva_contrasena",usuario.value.nueva_contrasena)
        formData.append("confirmar_contrasena",usuario.value.confirmar_contrasena)

        spiner.value.show=true

        const response_data = await fetch(url,{
            method: "post",
            body: formData
        }).then((response)=>response.json()).catch((error)=>{console.log("Catch error: ", error)})

        if(response_data){
            spiner.value.show=false
            dialog_modal.value.text = response_data.message
            dialog_modal.value.show = true

            if(response_data.data.status){
                setTimeout(()=>{
                    
                    router.push({name:'LogIn'})
                },2000)
                
            }

        }
        
        //console.log("Nueva contraseña Data: ", response_data)


    }
</script>