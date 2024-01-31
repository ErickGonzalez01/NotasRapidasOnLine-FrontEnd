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

@media(min-width: 600px) {
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
</style>
<template>
    <NavBar />
    <div class="alto bg-notas padding display-flex gap">
        <div v-show="store.status" @click="store.status ? store.status = false : store.status = true"
            class="bg-white estilos-menu-titulos rounded p-3 barra_lateral">
            <h4>Notas:</h4>
            <TituloNotas v-for="n in 100" :key="n" />
        </div>
        <div class="bg-white estilos-menu-nota rounded estilos-nota barra_lateral">
            <h3 class="p-3">Titulo</h3>
            <div class="clas">
                cuerpo de la nota
            </div>
        </div>
    </div>
</template>
<script setup>
    import { sidebarNota } from '@/stores/sidebarNota'
    import TituloNotas from '@/components/notas/TituloNotas.vue'
    import NavBar from '@/components/notas/NavBar.vue'
    const store = sidebarNota()
</script>