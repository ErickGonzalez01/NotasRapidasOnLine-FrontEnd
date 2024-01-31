<style scoped>
.tamano{
    height:10rem;
    width:15rem;
}
.scroll{
    overflow: hidden;
}
.tamano-cuerpo{
    height:6rem;
}
.animation:hover {
  animation: scale 1s;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

</style>
<template>
    <div v-on:click="LeerNota" class="tamano bg-nota rounded p-3 animation">
        <div class="text-truncate mb-2 fw-bold">#{{ id }}/Quill Editor</div>
        <div class="scroll tamano-cuerpo">
          <QuillEditor :options="options" :content="'Hola esta es una nota ' + id" contentType="text" />
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount} from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
//const
    const options = {
        debug: 'info',
        modules: {
          toolbar: false
        },
        placeholder: 'Notas aqui...',
        readOnly: true,
        theme: 'snow'
    }
    const props = defineProps({
        id:{
            type: Number,
            required: true
        }
    })
    function LeerNota(){
        alert("diste click a la nota " + props.id)
    }

    onBeforeMount(()=>{
      alert("creando notas")
    })

</script>
