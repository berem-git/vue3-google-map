<template>
  <div>
    <GoogleMap
      api-key="AIzaSyCRmaMGXCNH9lHbN5T9Kl-YulB29uuLeNI"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker
        v-for="(location, i) in locations"
        :options="{ position: location }"
        :key="i"
        @click="clg(location.name)"
      ></Marker>
    </GoogleMap>
  </div>
</template>
  
  <script>
import { GoogleMap, Marker } from "vue3-google-map";
import {useLocations} from "@/hooks/useLocation"
export default ({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 42.86885, lng: 74.61727 };
    const { locations } = useLocations();
    const clg=(locations)=>{
      console.log(locations)
    }
    return { center, locations ,clg};
  },

});
</script>
  
  <style scoped>
</style>
  