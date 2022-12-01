import {computed,ref} from 'vue'

export default function useCity(locations) {
    let arrSet = new Set();
    let arr = ref([]);
    const selectUnique= computed(() => {
        locations.value.forEach(element => {
            arrSet.add(element.city);
        });
        arrSet.forEach(el=>{
            arr.value.push({value: el});
        })
        return {arr};
    });
    return {
        selectUnique
    }
}
