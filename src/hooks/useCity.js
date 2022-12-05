import axios from "axios";
import { ref, onMounted } from "vue";

export function useCity() {
  const locations = ref([]);
  let selectUnique = new Set();
  const fetching = async () => {
    try {
      const response = await axios.get("http://localhost:3000/data?", {
        params: {
          Locale: "ru-RU",
        },
      });
      locations.value = response.data;
      locations.value.forEach((element) => {
        selectUnique.add(element.city);
      });
    } catch (e) {
      alert("Ошибка");
    }
  };
  onMounted(fetching);
  return {
    selectUnique,
  };
}
