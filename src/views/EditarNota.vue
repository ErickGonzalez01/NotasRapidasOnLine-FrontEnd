<script setup>
  import NavBar from "@/components/notas/NavBar.vue"
  import {useRouter} from "vue-router";
  import {UseURLBase} from "@/stores/url_base.js";
  import {Usuario} from "@/stores/usuario.js";
  import {ref, defineProps} from "vue"
  import SpinerModal from "@/components/SpinerModal.vue";

  const spiner = ref({
    show: false,
    info: "Cargando..."
  })
  const props = defineProps({
    id: {
      type: String,
      required: true
    }
  })
  const api = UseURLBase()
  const endpoint = api.url+"/api/user/notes/"+props.id
  const usuario = Usuario()
  const router = useRouter()

  const contenido = ref({
    titulo: "",
    contenido:null
  })

  const quill = ref(null)

  const ql_show = ref(false)
  async function load(){
    spiner.value.show=true
    const response = await fetch(endpoint,{
      method: "GET",
      headers: {
      Authorization: "Bearer "+usuario.token
      }
    }).then((response)=>response.json())

    if(response){
      if(response.data.status==false){
        router.push({path: "/authentication/login"})
      }
      if(response.data[0]==null){
        router.push({path: "/"})
      }else{
        quill.value.setContents(response.data[0].contenido.ops)
        //console.log(quill.value)
        contenido.value.titulo=response.data[0].titulo
        setTimeout(()=>{
          ql_show.value=true
          spiner.value.show=false
        },1000)
      }
      console.log("Editar data: ", response.data[0].contenido)
    }
  }
  const VerOps = function(e){
    contenido.value.contenido = quill.value.getContents()
  }
  const cancelar = function(){
    router.push({path: "/"})
  }
  const guardar= async function(){
    spiner.value.show=true

    const data = {
      titulo: contenido.value.titulo,
      contenido: JSON.stringify(contenido.value.contenido)
    }

    const formData = new URLSearchParams(Object.entries(data)).toString();
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        Authorization: "Bearer "+usuario.token,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData
    }).then((response)=>response.json()).catch(error => error)

    if(response){
      spiner.value.show=false
      router.push({path: "/"})
    }
    console.log("formData: ", formData)
    console.log("response: ", response)
    console.log("contenido: ", JSON.stringify(contenido.value.contenido))

  }
  load()
</script>
<template>
  <div>
    <NavBar :img="false"/>
    <div class="container bg-nota mt-2 mb-2 p-2 rounded">
      <div>
        <form id="form-content" @submit.prevent="guardar">
          <div class="mb-1">
            <label class="form-label" for="titulo">Titulo:</label>
            <input v-model="contenido.titulo" class="form-control" type="text" name="titulo" id="titulo"/>
          </div>
          <div>
            <QuillEditor @update:content="contenido.contenido=$event" @ready="quill = $event" @textChange="console.log('Cambios: ', $event)"/>
          </div>
          <div class="mt-2 d-flex flex-row justify-content-end gap-1">
            <input class="btn btn-primary" type="submit" value="Guardar">
            <button v-on:click="cancelar" class="btn btn-primary">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
    <SpinerModal :show="spiner.show" :info="spiner.info"/>
  </div>

</template>
<style>
  .ql-editor{
    height: 61.8vh!important;
  }
</style>