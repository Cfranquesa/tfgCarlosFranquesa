<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDataStore } from "@/stores/store"; // Asegúrate de que la ruta es correcta
import { onMounted, watch } from "vue";

const store = useDataStore();

onMounted(async () => {
  await store.fetchAll(); // Carga los datos al iniciar la app
  console.log("Datos cargados:", store.pautas, store.coga, store.heuristics);
});

</script>

<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app-container {
  height: 100%;
  width: 100%;
  display: flex; 
}
</style>
