<template>
  <div v-if="tableId">
    <p>Mostrando: {{ getTableLabel(tableId) }}</p>

    <table v-if="data.length">
      <thead>
        <tr>
          <!-- WCAG -->
          <template v-if="tableId === TABLE_TYPES.WCAG.id">
            <th style="width: 15%;">WCAG</th>
            <th style="width: 30%;">Categorías</th>
            <th style="width: 30%;">Discapacidades</th>
            <th style="width: 15%;">Tipo</th>
            <th style="width: 10%;">Nivel</th>
          </template>

          <!-- Heurísticas -->
          <template v-else-if="tableId === TABLE_TYPES.HEURISTICS.id">
            <th style="width: 20%;">ID</th>
            <th style="width: 80%;">Heurística</th>
          </template>

          <!-- COGA -->
          <template v-else-if="tableId === TABLE_TYPES.COGA.id">
            <th style="width: 20%;">ID</th>
            <th style="width: 80%;">Pauta COGA</th>
          </template>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in data" :key="item.id">
          <!-- WCAG -->
          <template v-if="tableId === TABLE_TYPES.WCAG.id">
            <td>
              <a :href="item.link" target="_blank" rel="noopener">{{ item.WCAG }}</a>
            </td>
            <td>{{ (item.category || []).join(', ') }}</td>
            <td>{{ (item.disabilities || []).join(', ') }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.level }}</td>
          </template>

          <!-- Heurísticas -->
          <template v-else-if="tableId === TABLE_TYPES.HEURISTICS.id">
            <td>{{ item.id }}</td>
            <td>{{ item.heuristicespañol }}</td>
          </template>

          <!-- COGA -->
          <template v-else-if="tableId === TABLE_TYPES.COGA.id">
            <td>{{ item.id }}</td>
            <td>{{ item.COGAESP }}</td>
          </template>
        </tr>
      </tbody>
    </table>

    <p v-else>No hay resultados para mostrar.</p>
  </div>
</template>

<script setup>
import { getTableLabel, TABLE_TYPES } from '@/constants/tableTypes'

defineProps({
  tableId: {
    type: Number,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  border: 2px solid #ccc;
  padding: 0.5rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
