import {computed,ref} from 'vue'

export default function useCity(locations) {
    let c = new Set();
    let arr = ref([]);
    const selectUnique= computed(() => {
        locations.value.forEach(element => {
            c.add(element.city)
        });

       c.forEach(item=>arr.value.push(item));
       console.log(arr.value);
       return {arr};
    })
    return {
        selectUnique
    }
}
//