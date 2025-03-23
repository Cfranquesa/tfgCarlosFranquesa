<template>
    <div class="info-view">
        <FilterPanel @update:filter="handleFilterUpdate" @select-table="selectTable" />
        <CriteriaTable class="criteria-table" v-if="selectedTable !== null" :tableId="selectedTable"
            :data="filteredData" />
    </div>
</template>

<script setup>
import FilterPanel from '@/components/FilterPanel.vue'
import { useDataStore } from '@/stores/store'
import { ref, computed } from 'vue'
import { TABLE_TYPES, getTableLabel } from '@/constants/tableTypes'
import CriteriaTable from '@/components/CriteriaTable.vue'
import { applyFilters } from '@/utils/FilterUtils'

const store = useDataStore()
const currentFilter = ref({})
const selectedTable = ref(null)

const filteredData = computed(() => {
    const filtered = applyFilters({
        heuristics: store.heuristics,
        coga: store.coga,
        wcag: store.pautas
    }, currentFilter.value)

    switch (selectedTable.value) {
        case TABLE_TYPES.HEURISTICS.id:
            return filtered.heuristics
        case TABLE_TYPES.COGA.id:
            return filtered.coga
        case TABLE_TYPES.WCAG.id:
            return filtered.wcag
        default:
            return []
    }
})

function selectTable(table) {
    selectedTable.value = table
}

function handleFilterUpdate(f) {
    console.log('DEBUG -> updated filter:', f)
    currentFilter.value = {
        ...f,
        level: f.level ? [...f.level] : null
    }
}
</script>

<style scoped>
.buttons {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
}

.info-view {
    display: flex;
    height: 100vh;
}


.criteria-table {
    width: 100%;
    min-width: 0;
    padding: 2rem;
    overflow-x: auto;
}
</style>