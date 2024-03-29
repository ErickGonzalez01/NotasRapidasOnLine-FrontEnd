<style>
    .alto{
        height: 68vh;
    }
    body{
        background: var(--background-notas)!important;
    }
    #editor .ql-container{
        height: 54vh;
    }
</style>
<template>
    <div>
        <NavBar :img="false"/>
        <div class="mt-2 d-flex flex-direction-row justify-content-center">
            <div class="w-75">
                <form class="card p-1">
                    <div class="mb-1">
                        <label class="form-label" for="titulo">Titulo:</label>
                        <input v-model="titulo" class="form-control" type="text" name="titulo" id="titulo">
                    </div>
                    <div id="editor" class="alto">
                        <QuillEditor v-model:content="nota" contentType="delta" placeholder="Escriba su nueva nota..."/>
                    </div>
                </form>                
            </div>            
        </div>
        <div class="mt-3 d-flex flex-direction-row justify-content-center">
            <div class="w-75 d-flex flex-direction-row justify-content-end gap-1">
                <button v-on:click="router.push({path: '/'})" class="btn btn-primary">Canselar</button>
                <button v-on:click="guardar" class="btn btn-primary gap-2">Guardar</button>
            </div>
        </div>
        <SpinerModal :show="spiner.show" />
        <DialogModal :show="dialog.show" :titulo="dialog.titulo" :text="dialog.text" @cerrar="dialog.show = false"/>
    </div>
</template>
<script setup>
    import NavBar from '@/components/notas/NavBar.vue';
    import {ref} from 'vue'
    import { Usuario} from '@/stores/usuario'
    import { UseURLBase } from '@/stores/url_base'
    import SpinerModal from '@/components/SpinerModal.vue'
    import DialogModal from '@/components/DialogModal.vue'
    import {useRouter} from "vue-router";

    const nota = ref([])
    const titulo= ref('')
    const usuario = Usuario()
    const api = UseURLBase()
    const endpoint = '/api/user/notes'
    const url = api.url + endpoint
    const spiner = ref({
        show: false,
        info: "Guardando nota..."
    })
    const dialog = ref({
        show: false,
        titulo: "Guardando Nota",
        text: ""
    })
    const router = useRouter()
    async function guardar(){
        spiner.value.show = true
        const formdata = new FormData()
        formdata.append("titulo",titulo.value)
        formdata.append("contenido",JSON.stringify(nota.value))

        const data = await fetch(url,{
            headers:{
                Authorization: "Bearer " + usuario.token
            },
            method: "post",
            body: formdata
        }).then((response)=>response.json()).catch((error)=>{console.log("Error: ", error)})

        if(data){

            spiner.value.show = false
            dialog.value.text = data.message
            dialog.value.show=true

          if(data.data.status==false){
            router.push({path:"authentication/login"})
          }else if(data.data.id){
            setTimeout(()=>{
              dialog.value.show=false
              router.push({path:"/"})
            },2000)

          }
        }

    }

</script>