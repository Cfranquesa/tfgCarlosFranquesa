// FilterUtils.js

/**
 * Objeto de filtro con campos opcionales (todos pueden ser null o undefined)
 * @typedef {Object} Filter
 * @property {string|null} disability - Tipo de discapacidad (ej. 'cognitive')
 * @property {string|null} level - Nivel de WCAG (ej. 'A', 'AA', 'AAA')
 */

/**
 * Aplica los filtros al conjunto de datos original y devuelve una copia filtrada
 * @param {Object} data - Datos originales { heuristics, coga, wcag }
 * @param {Filter} filter - Criterios de filtrado
 * @returns {Object} - Objetos filtrados: { heuristics, coga, wcag }
 */

export function applyFilters(data, filter = {}) {
    const { disability = null, level = null } = filter || {}

    const filteredWcag = data.wcag.filter(item => {
        const matchDisability = !filter.disability || (item.disabilities || []).includes(filter.disability)
        const matchLevel = !level || (Array.isArray(level) ? level.includes(item.level) : item.level === level)
        return matchDisability && matchLevel
    })

    const wcagIds = filteredWcag.map(item => item.id)

    const filteredHeuristics = data.heuristics.filter(item =>
        (item.wcag || []).some(w => wcagIds.includes(w))
    )

    const filteredCoga = data.coga.filter(item =>
        (item.wcag || []).some(w => wcagIds.includes(w))
    )

    return {
        heuristics: filteredHeuristics,
        coga: filteredCoga,
        wcag: filteredWcag
    }
}
