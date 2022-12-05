import { computed, ref } from "vue";
import axios from "axios";

export default function useFilterLocation(selectedFilter,selectedFilterCity) {
    const locations = ref([]);
  const sortedLocation = computed(async () => {
    const response = await axios.get("http://localhost:3000/data?", {
      params: {
        Locale: "ru-RU",
        typeObj: selectedFilter.value,
        city:selectedFilterCity.value,
      },
    });
    locations.value = response.data;
    locations.value.map(
      (item) => (
        (item.lat = Number(item.lat.replace(/,/, "."))),
        (item.lng = Number(item.lng.replace(/,/, ".")))
      )
    );
    console.log(locations.value)
    return locations.value;
  });
  return {
    sortedLocation,
  };
}
