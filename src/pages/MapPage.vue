<template>
  <div>
    <GoogleMap
      api-key="AIzaSyCRmaMGXCNH9lHbN5T9Kl-YulB29uuLeNI"
      style="width: 100%; height: 700px"
      :center="center"
      :zoom="15"
    >
      <Marker
        v-for="(location, i) in sortedLocationCity"
        :options="{ position: location }"
        :key="i"
        @click="clg(location.name,location.typeObj)"
      ></Marker>
    </GoogleMap>
    <select-component
        v-model="selectedFilter"
        :options="filterOptions"
       
      />
      <!-- <select-component
        v-model="selectedFilterCity"
        :options="selectUnique.arr._rawValue"
        @click="sel(selectUnique)"
      />-->

    <select  v-model="selectedFilterCity"> 
    <option disabled value="">Выберите из списка</option>
    <option
    v-for="(city, i) in selectUnique.arr._rawValue"
      :key="i"
      :value="city.value"
    >
      {{ city.value }}
    </option> </select>
  </div>
</template>
  
  <script>
import { GoogleMap, Marker } from "vue3-google-map";
import {useLocations} from "@/hooks/useLocation"
import useFilterLocation from '@/hooks/useFilterLocation'
import selectComponent from "@/components/selectComponent.vue";
import useCity from "@/hooks/useCity"
import useCityFilter from "@/hooks/useCityFilter";
// import listComponent from "@/components/listComponent.vue";
export default ({
  components: { GoogleMap, Marker,selectComponent },
  // eslint-disable-next-line no-unused-vars
  data(props){
    return {
    filterOptions: [
        {value: 'Банкомат'},
        {value: 'Офис'},
        {value: 'Терминал'},
      ], 
    }
  },
  setup() {
    const center = { lat: 42.86885, lng: 74.61727 };
    const { locations } = useLocations();
    const {sortedLocation,selectedFilter }=useFilterLocation(locations)
    const {selectUnique}=useCity(locations)
    const {sortedLocationCity, selectedFilterCity}=useCityFilter(sortedLocation)
    const sel=(selectUnique)=>{ 
      console.log(selectUnique)
    }

    return { center, locations ,sel,sortedLocation,selectedFilter,selectUnique,sortedLocationCity,selectedFilterCity};
  },

});
</script>
  
  <style scoped>
</style>
  