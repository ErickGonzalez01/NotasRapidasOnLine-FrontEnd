<template>
    <div class="card mx-auto p-2 form-width">
        <form @submit.prevent="EnviarCorreo">
            <div>
                <h3>Recuperar contraseña</h3>
                <p>Se enviara un correo electronico con la nueva contraseña.</p>
            </div>
            <div>
                <label class="form-label" for="email">Correo:</label>
                <input v-model="correo" class="form-control" type="email" id="email" name="email">
            </div>
            <div>
                <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/login">Iniciar sesion</RouterLink>
            </div>
            <div class="mt-2 d-flex flex-row justify-content-center">
                <button class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
    <SpinerModalVue :show="spiner" info="Cargando..."/>
    <DialogModal :show="dialog" @cerrar="dialog=false" titulo="Recuperar contraseña." :text="dialog_text"/>
</template>
<script setup>

    import SpinerModalVue from '../SpinerModal.vue'
    import DialogModal from '../DialogModal.vue'
    import { ref } from 'vue'
    import {UseURLBase} from '@/stores/url_base'
    //import {Usuario} from '@/stores/usuario'
    import {useRouter} from 'vue-router'

    const dialog = ref(false)
    const dialog_text = ref("")
    const spiner = ref(false)
    const correo = ref("")
    const url = UseURLBase()
    const endpoint = "/api/authentication/recoverypassword"
    const url_api = url.url+endpoint
    //const usuario = Usuario()
    const router = useRouter()

    async function EnviarCorreo(){
        spiner.value = true
        //console.log("URL: ", url.url)
        //console.log("EndPoint: ", endpoint)
        //console.log("URL API: ", url_api)
        //console.log("Token: ", usuario.token)

        const formData = new FormData()
        formData.append("correo",correo.value)

        const data = await fetch(url_api,{
            method:"post",
            body:formData
        }).then((response)=>response.json()).catch((error)=>{
            console.log("Error: ", error)
        })

        dialog_text.value = data.message
        console.log("Respuesta: ", data)
        
        if(data){
            spiner.value = false
            dialog.value = true

            if(data.data.status){
                setTimeout(()=>{
               
                    router.push({name: 'LogIn'})
       
                },2000)
            }            
        }
    }

</script>