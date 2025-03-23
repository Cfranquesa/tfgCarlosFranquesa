<template>
    <aside class="filter-panel">
        <div class="table-buttons">
            <h3>Ver tabla</h3>
            <button v-for="type in Object.values(TABLE_TYPES)" :key="type.id" @click="emit('select-table', type.id)">
                {{ getTableLabel(type.id) }}
            </button>
        </div>
        <h3>Niveles</h3>
        <div class="levels">
            <label><input type="checkbox" value="A" v-model="selectedLevels" /> Nivel A</label>
            <label><input type="checkbox" value="AA" v-model="selectedLevels" /> Nivel AA</label>
            <label><input type="checkbox" value="AAA" v-model="selectedLevels" /> Nivel AAA</label>
        </div>
    </aside>
</template>

<script setup>
import { TABLE_TYPES, getTableLabel } from '@/constants/tableTypes'
import { ref, watch } from 'vue'

const selectedLevels = ref([])

//cambios al padre
const emit = defineEmits(['update:filter', 'select-table'])
watch(selectedLevels, () => {
    emit('update:filter', { level: selectedLevels.value })
})

</script>

<style scoped>
.filter-panel {
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  padding: 1rem;
  background-color: #f5f5f5;
  border-right: 1px solid #ccc;
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1; /* por si acaso */
}

.levels label {
    display: block;
    margin: 0.25rem 0;
}
</style>