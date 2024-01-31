<template>
    <div class=" pt-3 pb-3 bg-notas contenedor-notas d-flex flex-wrap gap-3 justify-content-evenly">
        <slot></slot>
    </div>
</template>
<style scoped>
.contenedor-notas{
    height:91.80vh;
    overflow-y:scroll;
}
</style>
