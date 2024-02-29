<style scoped>
/*Contenedor*/

.alto {
    height: 91.80vh;
    overflow-y: scroll;
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
    z-index: 999!important;
}

</style>
<template>
    <NavBar :img="true"/>
    <div class="alto bg-notas padding display-flex gap">
        <div v-show="store.status" @click="store.status ? store.status = false : store.status = true" class="scroll zindex bg-white estilos-menu-titulos rounded p-3 barra_lateral">
            <h4>Notas:</h4>
            <TituloNotas v-for="(item, index) in notas.notas" :key="index" :id="Number(index)" :titulo="item.titulo"/>
        </div>
        <div class="bg-white estilos-menu-nota rounded estilos-nota barra_lateral">
            <h3 class="p-3">{{notas.notas[notas.notaactual].titulo}}</h3>
            <div class="border-rounded ps-1 pe-1">
                <QuillEditor v-if="notas.vernotapagequill" :options="options" contentType="delta" :content="notas.notas[notas.notaactual].contenido.ops"/>
            </div>
            <div class="d-flex flex-direction-row justify-content-end mt-2 gap-2 me-2">
                <button v-on:click="editar" class="btn">
                    <img src="@/assets/pen.png"/>
                </button>
                <button v-on:click="eliminar" class="btn">
                    <img src="@/assets/dustbin.png"/>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { sidebarNota } from '@/stores/sidebarNota'
    import TituloNotas from '@/components/notas/TituloNotas.vue'
    import NavBar from '@/components/notas/NavBar.vue'
    import { Notas } from '@/stores/notas';
    import { QuillEditor } from '@vueup/vue-quill';
    //:content="notas.notas[notas.notaactual].contenido.ops"
    const notas = Notas()
    
    const store = sidebarNota()

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
    if(notas.notas.length == 0){
        notas.notasApi(notas.pager_curren.value ?? 1)
    }

    function eliminar(){
        alert("Eliminando nota " + notas.notas[notas.notaactual].id)
    }
    function editar(){
        alert("Actualizando nota " + notas.notas[notas.notaactual].id)
    }
</script>