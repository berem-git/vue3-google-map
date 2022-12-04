import { computed } from "vue";

export default function useCity(locations) {
  let arrSet = new Set();
  const selectUnique = computed(() => {
    locations.value.forEach((element) => {
      arrSet.add(element.city);
    });
    return arrSet;
  });
  return {
    selectUnique,
  };
}
