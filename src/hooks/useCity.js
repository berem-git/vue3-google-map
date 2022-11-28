import {computed} from 'vue'

export default function useCity(locations) {

    let arrSet = new Set();
    let arr = [];
    const selectUnique= computed(() => {
        locations.value.forEach(element => {
            arrSet.add(element.city);
        });

        arrSet.forEach(el=>{
            arr.push({value: el});
        })
        return {cities: arr};
    })

    return {
        selectUnique
    }
}
