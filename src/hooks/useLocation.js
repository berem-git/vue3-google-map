import axios from "axios";
import {ref, onMounted} from 'vue';

export function useLocations() {
    const locations = ref([])
    const fetching = async () => {
        try {
            const response = await axios.get('http://localhost:3000/data?Locale=ru-RU');
            locations.value = response.data;
            console.log(response.data);
            locations.value.map(item=>(
                item.lat=Number(item.lat.replace(/,/, '.')),
                item.lng=Number(item.lng.replace(/,/, '.'))
              ))
        } catch (e) {
            alert('Ошибка')
        }
    }
    onMounted(fetching)
    return {
        locations
    }
}
