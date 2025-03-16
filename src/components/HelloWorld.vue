<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>


<script>
import { collection, doc, setDoc, query, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import { computed } from "vue";
import { useDataStore } from "@/stores/store.js";


export default {
  methods: {
    async fetchDocumentsWithLevelA() {
      try {

        const store = useDataStore()

        const pautasDeaf = computed(() => 
          store.pautas.filter(pauta => pauta.disabilities?.includes("Deaf"))
        );
        console.log("Pautas Deaf:", pautasDeaf.value);

        // Consulta para obtener documentos (por ejemplo, con level === "A")
        const q = query(collection(db, "PautasWCAG"));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
          });
        } else {
          console.log("No se encontraron documentos con level 'A'");
        }
      } catch (error) {
        console.error("Error obteniendo los documentos:", error);
      }
    }
  },
};
</script>

<template>
  <div class="app-container">
    <h1 class="header">{{ msg }}</h1>
    <button @click="fetchDocumentsWithLevelA()" class="btn">Buscar Primeros 3 Nivel A</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
