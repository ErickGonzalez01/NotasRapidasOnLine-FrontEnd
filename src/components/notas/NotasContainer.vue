<template>
    <div class="pt-3 pb-3 bg-notas contenedor-notas d-flex flex-wrap gap-3 justify-content-evenly position-relative">
        <slot></slot>
    </div>
</template>
<style scoped>
.contenedor-notas {
    height: 85.52vh;
    overflow-y: scroll;
}
</style> 
