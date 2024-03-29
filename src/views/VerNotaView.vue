<style scoped>
/*Contenedor*/

.alto {
    height: 67.80vh;
}

/*Estilos nota */
.estilos-nota {
    height: 100%;
}

.estilos-menu-nota {
    width: 100%;
}

.padding {
    padding: 1rem;
}

/*Estilos titulo*/
.estilos-menu-titulos {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15rem;
    /*display:none;*/
}

@media(min-width: 990px) {
    .display-flex {
        display: flex;
        flex-direction: row;
    }

    .gap {
        gap: 1rem;
    }

    .estilos-menu-titulos {
        width: 40%;
        position: static;
        display: block !important;
    }

    .estilos-menu-nota {
        width: 60%;
    }

    .barra_lateral {
        overflow-y: scroll;
    }
}

    .scroll{
        overflow-y: scroll;
    }

.zindex{
    z-index: 1!important;
}

</style>
<template>
    <NavBar :img="true"/>
    <div class="bg-notas padding display-flex gap">
        <div v-show="store.status" @click="store.status ? store.status = false : store.status = true" class="scroll zindex bg-white estilos-menu-titulos rounded p-3 barra_lateral">
            <h4>Notas:</h4>
            <TituloNotas v-for="(item, index) in notas.notas" :key="index" :id="Number(index)" :titulo="item.titulo"/>
        </div>
        <div class="bg-white estilos-menu-nota rounded estilos-nota barra_lateral">
            <h3 class="p-3">{{notas.notas[notas.notaactual].titulo ?? ""}}</h3>
            <div class="alto border-rounded ps-1 pe-1">
                <QuillEditor v-if="notas.vernotapagequill" :options="options" contentType="delta" :content="notas.notas[notas.notaactual].contenido.ops"/>
            </div>
            <div class="d-flex flex-direction-row justify-content-end mt-2 gap-2 me-2">
                <button v-on:click="router.push({path: '/'})" class="btn">
                  <img src="@/assets/back.png" alt="atras">
                </button>
                <button v-on:click="editar" class="btn">
                    <img src="@/assets/pen.png"/>
                </button>
                <button v-on:click="eliminar" class="btn">
                    <img src="@/assets/dustbin.png"/>
                </button>
            </div>
        </div>
    </div>
  <SpinerModal :show="spiner.show" :info="spiner.info"/>
  <DialogModal :show="dialog.show" :titulo="dialog.titulo" :text="dialog.text" @cerrar="dialog.show=false"/>
</template>
<script setup>
    import { sidebarNota } from '@/stores/sidebarNota'
    import TituloNotas from '@/components/notas/TituloNotas.vue'
    import NavBar from '@/components/notas/NavBar.vue'
    import { Notas } from '@/stores/notas';
    import { QuillEditor } from '@vueup/vue-quill';
    import {Usuario} from "@/stores/usuario.js";
    import {UseURLBase} from "@/stores/url_base.js";
    import SpinerModal from "@/components/SpinerModal.vue";
    import DialogModal from "@/components/DialogModal.vue";
    import {ref, onBeforeMount} from "vue";
    import {useRouter} from "vue-router";

    const notas = Notas()

    const router = useRouter()

    const store = sidebarNota()

    const api = UseURLBase()
    const endpoint = api.url + "/api/user/notes/"

    const usuario = Usuario()

    const spiner = ref({
      show: false,
      info: "Eliminando nota."
    })

    const dialog = ref({
      show: false,
      titulo: "Eliminando nota.",
      text: "Se elimino correctament."
    })

    const options = {
      debug: 'warn',
      modules: {
        toolbar: false
      },
      placeholder: 'Notas aqui...',
      readOnly: true,
      theme: 'snow'
    }
//:content="notas.notas[notas.notaactual].contenido.ops
    onBeforeMount(()=>{
      if(notas.notas.length == 0){
        notas.notasApi(notas.pager_curren.value ?? 1)
        if(notas.notas.length == 0){
          router.push({path:"/"})
        }
      }
    })
    async function eliminar(){
      const eliminar_nota = confirm("¿Seguro que quiere eliminar la nota '" + notas.notas[notas.notaactual].titulo +"'?")

      if(eliminar_nota){
        spiner.value.show=true
        const response = await fetch(endpoint+notas.notas[notas.notaactual].id,{
          method: "delete",
          headers: {
            Authorization: "Bearer "+usuario.token
          }
        }).then((res)=>res.json()).catch((err)=>{console.log(err)})

        if(response){

          spiner.value.show=false
          dialog.value.show=true
          if(response.data.status){
            setTimeout(()=>{
              router.push({path:"/"})
            },2000)
          }else{
            dialog.value.text=response.message
            setTimeout(()=>{
              router.push({path:"authentication/login"})
            },2000)
          }
        }

        if(response.data.status){
          spiner.value.show=false
          dialog.value.show=true
        }
      }
    }
    function editar(){
        //alert("Actualizando nota " + notas.notas[notas.notaactual].id)
      router.push({path: "/editar/"+notas.notas[notas.notaactual].id})
    }
</script>