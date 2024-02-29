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
        <div class="text-truncate mb-2 fw-bold">{{ titulo }}</div>
        <div class="scroll tamano-cuerpo">
          <QuillEditor :options="options" :content="contenido" contentType="delta"/>
        </div>
    </div>
</template>
<script setup>
  import { useRouter } from 'vue-router'
  import { Notas } from '@/stores/notas'

  const router = useRouter()

  const notas = Notas()

  const options = {
      debug: 'warn',
      modules: {
        toolbar: false
      },
      placeholder: 'Notas aqui...',
      readOnly: true,
      theme: 'snow'
  }
    const props = defineProps({
        id:{
            type: String,
            required: true
        },
        titulo:{
          typr: String,
          required: true
        },
        contenido:{
          type: Array,
          required: true
        },
        index: {
          type: Number,
          required: true
        }
    })

    function LeerNota(){

      notas.notaactual = props.index
      /*console.log(notas.notaactual)
      console.log(props.contenido)*/
      router.push({path:"/ver_nota"}) 

    }


</script>
