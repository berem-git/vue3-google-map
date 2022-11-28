import {ref, computed} from 'vue'

export default function useFilterLocation(locations) {
    const selectedFilter = ref('')
    const sortedLocation = computed(() => {
        return locations.value.filter(location => location.typeObj.includes(selectedFilter.value))
    })
    return {
        selectedFilter, sortedLocation
    }
}
