

<template>
  <div class="wrapper">
    <GoogleMap
      api-key="AIzaSyCRmaMGXCNH9lHbN5T9Kl-YulB29uuLeNI"
      style="width: 100%; height: 500px; position: absolute"
      :center="center"
      :zoom="15"
    >
      <Marker
        v-for="(location, i) in sortedLocationCity"
        :options="{ position: location }"
        :key="i"
        @click="clg(location)"
      ></Marker>
    </GoogleMap>

    <nav class="nav"></nav>
    <block-item-component class="wrapper_block">
      <list-component v-model="selectedFilter" :options="filterOptions" />
      <select-component
        v-model="selectedFilterCity"
        :options="selectUnique.arr._rawValue"
    /></block-item-component>
  </div>
</template>
  <script>
import { ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { useLocations } from "@/hooks/useLocation";
import useFilterLocation from "@/hooks/useFilterLocation";
import selectComponent from "@/components/selectComponent.vue";
import useCity from "@/hooks/useCity";
import useCityFilter from "@/hooks/useCityFilter";
import blockItemComponent from "@/components/blockItemComponent.vue";
import listComponent from "@/components/listComponent.vue";
import useSchedule from "@/hooks/useSchedule";
export default {
  components: {
    GoogleMap,
    Marker,
    selectComponent,
    blockItemComponent,
    listComponent,
  },
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
  // eslint-disable-next-line no-unused-vars
  setup(props) {
    const selectPoint = ref({});
    const center = { lat: 42.86885, lng: 74.61727 };
    const { locations } = useLocations();
    const { selectedFilter, sortedLocation } = useFilterLocation(locations);
    const { selectUnique } = useCity(locations);
    const { sortedLocationCity, selectedFilterCity } =
      useCityFilter(sortedLocation);
    const { scheduleInfo } = useSchedule(selectPoint);
    const clg = (location) => {
      selectPoint.value = location;
      console.log(scheduleInfo.value)
    };
    return {
      center,
      clg,
      locations,
      sortedLocation,
      selectedFilter,
      selectUnique,
      sortedLocationCity,
      selectedFilterCity,
      selectPoint,
      scheduleInfo,
    };
  },
};
</script>
  
  <style scoped>
.wrapper {
  position: relative;
  width: 100%;
  padding-top: 50px;
}
.nav {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
.wrapper_block {
  top: 150px;
  position: absolute;
  width: 70%;
  margin: 0 auto;
}
</style>