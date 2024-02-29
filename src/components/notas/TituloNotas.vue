<style scoped>
    .notas-titulo{
        height: 2rem;
    }
    .notas-titulo:hover{
        background-color: var(--background-notas);
        color: #fff;
    }

    .notas-titulo-active{
        background-color: var(--background-notas);
        color: #e3eddc;
    }

</style>
<template>
    <div @click="click" class="p-1 card my-1 fw-bold" :class="[nt.notaactual == props.id ? 'notas-titulo-active':'notas-titulo']">
        {{ titulo }}
    </div>
</template>
<script setup>
    import { defineProps } from 'vue';
    import {Notas} from '@/stores/notas'

    const nt = Notas()
    //notaactual

    const props = defineProps({
        titulo:{
            type: String,
            required: true
        },
        id:{
            type: Number,
            required: true
        }
    })

    function IntervalUpdateQuillEditorView(show){
        nt.vernotapagequill = show
        //console.log("Reder Quill Notas ver: ", nt.vernotapagequill)
    }
    function click(){
        IntervalUpdateQuillEditorView(false)
        nt.notaactual = props.id
        setTimeout(()=>{
            IntervalUpdateQuillEditorView(true)
        },500)
        //IntervalUpdateQuillEditorView(true)
        /*console.log("Nota actual: ", nt.notaactual)
        console.log("Nota ID: ", props.id)
        console.log("Nota actual 'contenido': ", nt.notas[nt.notaactual].contenido.ops)*/
    }
</script>