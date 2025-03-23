<template>
    <div>
        <h1>Página nueva</h1>
        <p>Esta es una página creada desde cero.</p>
        <button @click="goToInfo">Ir a Información</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToInfo() {
  router.push('/info')
}
</script>