<template>
    <div class="content">
      <GoogleMap
        api-key="AIzaSyCRmaMGXCNH9lHbN5T9Kl-YulB29uuLeNI"
        style="width: 100%; height: 700px; position: absolute"
        :center="center"
        :zoom="15"
      >
        <Marker
          v-for="(location, i) in sortedLocationCity"
          :options="{ position: location }"
          :key="i"
          @click="clg(location.name, location.typeObj)"
        ></Marker>
      </GoogleMap>

      <block-item-component class="wrapper_block">
        <list-component
          v-model="selectedFilter"
          :options="filterOptions" />
        <select-component
          v-model="selectedFilterCity"
          :options="selectUnique.arr._rawValue"
      /></block-item-component>
    </div>
</template>
  <script>
import { GoogleMap, Marker } from "vue3-google-map";
import { useLocations } from "@/hooks/useLocation";
import useFilterLocation from "@/hooks/useFilterLocation";
import selectComponent from "@/components/selectComponent.vue";
import useCity from "@/hooks/useCity";
import useCityFilter from "@/hooks/useCityFilter";
import blockItemComponent from "@/components/blockItemComponent.vue";
import listComponent from "@/components/listComponent.vue";
export default {
  components: { GoogleMap, Marker, selectComponent, blockItemComponent,listComponent},
  // eslint-disable-next-line no-unused-vars
  data() {
    return {
      filterOptions: [
        { value: "Банкомат" },
        { value: "Офис" },
        { value: "Терминал" },
      ],
    };
  },
  setup() {
    const center = { lat: 42.86885, lng: 74.61727 };
    const { locations } = useLocations();
    const { sortedLocation, selectedFilter } = useFilterLocation(locations);
    const { selectUnique } = useCity(locations);
    const { sortedLocationCity, selectedFilterCity } =
      useCityFilter(sortedLocation);
    return {
      center,
      locations,
      sortedLocation,
      selectedFilter,
      selectUnique,
      sortedLocationCity,
      selectedFilterCity,
    };
  },
};
</script>
  
  <style scoped>
.content {
  position: relative;
  width: 100%;
}
.wrapper_block{
  padding-top: 80px;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>
  