import {ref, computed} from 'vue'

export default function useFilterLocation(locations) {
    const selectedFilterCity = ref('')
    const sortedLocationCity = computed(() => {
        return locations.value.filter(location => location.city.includes(selectedFilterCity.value))
    })
    return {
        selectedFilterCity, sortedLocationCity
    }
}
